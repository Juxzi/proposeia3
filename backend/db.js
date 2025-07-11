const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/mydb'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};
