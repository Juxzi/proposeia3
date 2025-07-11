# Fullstack Project

This repository contains a simple Node.js/Express backend connected to PostgreSQL and a React frontend.

## Backend

The backend resides in the `backend` folder. It uses Express for routing and the `pg` package to connect to PostgreSQL.

- `backend/index.js` – entry point of the Express application
- `backend/app.js` – example route definition
- `backend/package.json` – basic project configuration

Run the backend:
```bash
cd backend
npm install  # if dependencies are available
npm start
```

## Frontend

The frontend resides in the `frontend` folder. It contains a minimal React setup.

- `frontend/src` – React components
- `frontend/public` – static files and `index.html`
- `frontend/package.json` – project configuration with build scripts

Run the frontend:
```bash
cd frontend
npm install  # if dependencies are available
npm start
```

## Project Structure

```
backend/
  app.js
  index.js
  package.json
frontend/
  public/
    index.html
  src/
    App.js
    index.js
  package.json
README.md
```
