const express = require('express');
const app = express();
const routes = require('./app');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/mydb'
});

app.use(express.json());
app.use('/api', routes);

// test db connection
pool.connect(err => {
  if (err) {
    console.error('Failed to connect to PostgreSQL', err);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
