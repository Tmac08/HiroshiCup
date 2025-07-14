// Hardcoded data for prototype

exports.teams = [
  {
    name: "TEAM NISHI",
    players: [
      { id: 1, name: "Kyle Nishi", handicap: 11 },
      { id: 2, name: "Jeff May", handicap: 8 },
      { id: 3, name: "Kyle Grozdanich", handicap: 22 },
    ],
  },
  {
    name: "TEAM HUBER",
    players: [
      { id: 4, name: "Nick Huber", handicap: 16 },
      { id: 5, name: "Dayton Tomasson", handicap: 8 },
      { id: 6, name: "Taylor McInnes", handicap: 19 },
    ],
  },
  {
    name: "TEAM HAMADE",
    players: [
      { id: 7, name: "Art Hamade", handicap: 16 },
      { id: 8, name: "Bryce Hamade", handicap: 6 },
      { id: 9, name: "Spencer Hamade", handicap: 17 },
    ],
  },
];

exports.courses = [
  {
    id: 1,
    name: "Morningstar Golf Club",
    holeHandicap: [1, 13, 17, 5, 9, 3, 15, 11, 7, 2, 14, 18, 6, 10, 4, 16, 12, 8],
  },
  {
    id: 2,
    name: "Crown Isle Golf Course",
    holeHandicap: [4, 12, 10, 18, 6, 14, 2, 16, 8, 3, 13, 11, 5, 15, 1, 9, 7, 17],
  },
  {
    id: 3,
    name: "Glacier Greens Golf Club",
    holeHandicap: [17, 3, 15, 1, 13, 5, 11, 7, 9, 2, 12, 18, 6, 10, 4, 16, 8, 14],
  },
];

exports.rounds = [
  { id: 1, name: "Round 1", courseId: 1 },
  { id: 2, name: "Round 2", courseId: 2 },
  { id: 3, name: "Round 3", courseId: 3 },
  { id: 4, name: "Round 4", courseId: 2 },
];

// In-memory database for scores
exports.scores = [];
