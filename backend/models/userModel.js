const db = require('../db');
const bcrypt = require('bcrypt');

const createUser = async (username, password) => {
  const hash = await bcrypt.hash(password, 10);
  const result = await db.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
    [username, hash]
  );
  return result.rows[0];
};

const findByUsername = async (username) => {
  const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows[0];
};

const findById = async (id) => {
  const result = await db.query('SELECT id, username FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

const deleteUser = async (id) => {
  await db.query('DELETE FROM users WHERE id = $1', [id]);
};

module.exports = { createUser, findByUsername, findById, deleteUser };
