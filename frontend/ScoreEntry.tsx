import { Player, Team, Course, Round } from "./types";

// Change this URL to your backend Render URL when deploying
const API_BASE = "http://localhost:4000";

const api = (path: string, opts?: any) =>
  fetch(API_BASE + path, opts).then((r) => r.json());

export const fetchTeams = (): Promise<Team[]> => api("/api/teams");
export const fetchCourses = (): Promise<Course[]> => api("/api/courses");
export const fetchRounds = (): Promise<Round[]> => api("/api/rounds");
export const fetchStrokes = (playerId: number, courseId: number): Promise<number[]> =>
  api(`/api/strokes?playerId=${playerId}&courseId=${courseId}`);
export const submitScore = (body: {
  playerId: number;
  roundId: number;
  hole: number;
  strokes: number;
}) => api("/api/scores", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
export const fetchStandings = () => api("/api/standings");
