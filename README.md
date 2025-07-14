# Hiroshi Cup Golf Tournament App

A full-stack web app for tracking scores and points for the Hiroshi Cup golf tournament, including team and individual standings with net scoring and strokes allocated by handicap.

## Features

- Enter scores per player/hole/round
- Net scoring (auto-allocate strokes per handicap and hole index)
- Team and individual leaderboard (gross/net)
- Simple, mobile-friendly React UI
- Express backend with in-memory data for rapid prototyping

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (comes with Node)
- (Optional) Git

---

### 1. Backend

```bash
cd backend
npm install
npm start
```
The backend will run on [http://localhost:4000](http://localhost:4000).

---

### 2. Frontend

```bash
cd frontend
npm install
npm start
```
The frontend will run on [http://localhost:3000](http://localhost:3000).

**You can now enter scores and see live standings!**

---

### 3. Deployment

- **Backend:** Push to GitHub, connect to [Render.com](https://render.com/) or [Railway.app](https://railway.app/) for free hosting.
- **Frontend:** Push to GitHub, connect to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).

Update the API URL in `frontend/src/api.ts` if deploying backend to a different URL.

---

## File Structure

```
/backend
  app.js
  data.js
  scoring.js
  package.json
/frontend
  /src
    App.tsx
    ScoreEntry.tsx
    Standings.tsx
    api.ts
    types.ts
  package.json
  tsconfig.json
  ...
README.md
```

---

## License

MIT
