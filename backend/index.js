const express = require('express');
const app = express();
const routes = require('./app');
const db = require('./db');

app.use(express.json());
app.use('/api', routes);

// Test DB connection
(async () => {
  try {
    await db.query('SELECT 1');
    console.log('Connected to PostgreSQL');
  } catch (err) {
    console.error('Failed to connect to PostgreSQL', err);
  }
})();

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
