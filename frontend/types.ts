export type Player = {
  id: number;
  name: string;
  handicap: number;
};

export type Team = {
  name: string;
  players: Player[];
};

export type Course = {
  id: number;
  name: string;
  holeHandicap: number[];
};

export type Round = {
  id: number;
  name: string;
  courseId: number;
};
