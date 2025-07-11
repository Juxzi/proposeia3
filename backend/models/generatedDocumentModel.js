const db = require('../db');

const createGeneratedDoc = async (userId, templateId, content) => {
  const result = await db.query(
    `INSERT INTO generated_documents (user_id, template_id, content)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [userId, templateId, content]
  );
  return result.rows[0];
};

const getGeneratedDocs = async (userId) => {
  const result = await db.query(
    'SELECT * FROM generated_documents WHERE user_id = $1',
    [userId]
  );
  return result.rows;
};

const getGeneratedDoc = async (id) => {
  const result = await db.query(
    'SELECT * FROM generated_documents WHERE id = $1',
    [id]
  );
  return result.rows[0];
};

const deleteGeneratedDoc = async (id) => {
  await db.query('DELETE FROM generated_documents WHERE id = $1', [id]);
};

module.exports = {
  createGeneratedDoc,
  getGeneratedDocs,
  getGeneratedDoc,
  deleteGeneratedDoc
};
