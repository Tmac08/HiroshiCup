const express = require("express");
const cors = require("cors");
const { teams, courses, rounds, scores } = require("./data");
const { allocateStrokes, findTeamByPlayerId } = require("./scoring");

const app = express();
app.use(cors());
app.use(express.json());

// Team, player, and course endpoints
app.get("/api/teams", (req, res) => res.json(teams));
app.get("/api/courses", (req, res) => res.json(courses));
app.get("/api/rounds", (req, res) => res.json(rounds));

// Get strokes per hole for player/course
app.get("/api/strokes", (req, res) => {
  const { playerId, courseId } = req.query;
  const player = teams.flatMap(t => t.players).find(p => p.id === Number(playerId));
  const course = courses.find(c => c.id === Number(courseId));
  if (!player || !course) return res.status(400).json({ error: "Invalid player or course" });
  res.json(allocateStrokes(player.handicap, course.holeHandicap));
});

// Post score
app.post("/api/scores", (req, res) => {
  const { playerId, roundId, hole, strokes } = req.body;
  // Remove any previous score for this player/round/hole
  const i = scores.findIndex(
    (s) => s.playerId === playerId && s.roundId === roundId && s.hole === hole
  );
  if (i !== -1) scores.splice(i, 1);
  scores.push({ playerId, roundId, hole, strokes });
  res.json({ ok: true });
});

// Get scores for standings
app.get("/api/standings", (req, res) => {
  // Aggregate totals by player/round, plus team grouping
  const output = [];
  teams.forEach((team) => {
    team.players.forEach((player) => {
      const playerScores = scores.filter((s) => s.playerId === player.id);
      const byRound = rounds.map((round) => {
        const course = courses.find((c) => c.id === round.courseId);
        const strokesPerHole = allocateStrokes(player.handicap, course.holeHandicap);
        const holes = [];
        for (let h = 1; h <= 18; ++h) {
          const s = playerScores.find(
            (ss) => ss.roundId === round.id && ss.hole === h
          );
          if (!s) holes.push({ gross: null, net: null });
          else holes.push({
            gross: s.strokes,
            net: s.strokes - strokesPerHole[h - 1],
          });
        }
        return {
          round: round.name,
          grossTotal: holes.every(h => h.gross !== null) ? holes.reduce((sum, h) => sum + h.gross, 0) : null,
          netTotal: holes.every(h => h.net !== null) ? holes.reduce((sum, h) => sum + h.net, 0) : null,
        };
      });
      const totals = {
        name: player.name,
        team: team.name,
        rounds: byRound,
        gross: byRound.every(r => r.grossTotal !== null) ? byRound.reduce((sum, r) => sum + r.grossTotal, 0) : null,
        net: byRound.every(r => r.netTotal !== null) ? byRound.reduce((sum, r) => sum + r.netTotal, 0) : null,
      };
      output.push(totals);
    });
  });
  // Team totals
  const teamTotals = teams.map((team) => {
    const playerTotals = output.filter((o) => o.team === team.name);
    return {
      team: team.name,
      gross: playerTotals.every(p => p.gross !== null) ? playerTotals.reduce((sum, p) => sum + p.gross, 0) : null,
      net: playerTotals.every(p => p.net !== null) ? playerTotals.reduce((sum, p) => sum + p.net, 0) : null,
    };
  });
  res.json({ players: output, teams: teamTotals });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Backend running on " + PORT));
