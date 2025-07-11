const db = require('../db');

const createTemplate = async (template) => {
  const { title, description, sections, variables } = template;
  const result = await db.query(
    `INSERT INTO templates (title, description, sections, variables)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [title, description, sections, variables]
  );
  return result.rows[0];
};

const getTemplates = async () => {
  const result = await db.query('SELECT * FROM templates');
  return result.rows;
};

const getTemplate = async (id) => {
  const result = await db.query('SELECT * FROM templates WHERE id = $1', [id]);
  return result.rows[0];
};

const updateTemplate = async (id, template) => {
  const { title, description, sections, variables } = template;
  const result = await db.query(
    `UPDATE templates SET title=$1, description=$2, sections=$3, variables=$4
     WHERE id=$5 RETURNING *`,
    [title, description, sections, variables, id]
  );
  return result.rows[0];
};

const deleteTemplate = async (id) => {
  await db.query('DELETE FROM templates WHERE id = $1', [id]);
};

module.exports = {
  createTemplate,
  getTemplates,
  getTemplate,
  updateTemplate,
  deleteTemplate
};
