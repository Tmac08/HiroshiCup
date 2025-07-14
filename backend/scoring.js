// Allocate net strokes per hole for a player
function allocateStrokes(handicap, holeHandicapArray) {
  const strokes = Array(holeHandicapArray.length).fill(0);
  for (let i = 1; i <= handicap; i++) {
    // SI is 1-based, holes are 0-based
    const idx = holeHandicapArray.findIndex((n) => n === i);
    if (idx !== -1) strokes[idx] += 1;
    else {
      // Roll over if >18
      const rollIdx = holeHandicapArray.findIndex((n) => n === ((i - 1) % 18) + 1);
      if (rollIdx !== -1) strokes[rollIdx] += 1;
    }
  }
  return strokes;
}

// Returns team for player id
function findTeamByPlayerId(teams, playerId) {
  return teams.find((team) =>
    team.players.some((p) => p.id === playerId)
  );
}

module.exports = { allocateStrokes, findTeamByPlayerId };
