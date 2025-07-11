# Fullstack Project

This repository contains a simple Node.js/Express backend connected to PostgreSQL and a React frontend.

## Backend

The backend resides in the `backend` folder. It now exposes CRUD endpoints for users, document templates and generated documents. Authentication is handled via JWT tokens.

Main files:

- `backend/index.js` – entry point of the Express application
- `backend/app.js` – routes aggregator
- `backend/db.js` – PostgreSQL connection helper
- `backend/models/` – data access functions
- `backend/routes/` – REST API endpoints
- `backend/schema.sql` – SQL schema for all tables

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
  db.js
  index.js
  models/
    generatedDocumentModel.js
    templateModel.js
    userModel.js
  routes/
    auth.js
    generatedDocs.js
    templates.js
    users.js
  package.json
  schema.sql
frontend/
  public/
    index.html
  src/
    App.js
    index.js
  package.json
README.md
```
