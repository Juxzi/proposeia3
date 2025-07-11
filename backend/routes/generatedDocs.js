const express = require('express');
const jwt = require('jsonwebtoken');
const model = require('../models/generatedDocumentModel');
const router = express.Router();

const jwtSecret = process.env.JWT_SECRET || 'secretkey';

function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  try {
    const payload = jwt.verify(token, jwtSecret);
    req.userId = payload.id;
    next();
  } catch (err) {
    res.sendStatus(401);
  }
}

router.post('/', auth, async (req, res) => {
  const { templateId, content } = req.body;
  const doc = await model.createGeneratedDoc(req.userId, templateId, content);
  res.status(201).json(doc);
});

router.get('/', auth, async (req, res) => {
  const docs = await model.getGeneratedDocs(req.userId);
  res.json(docs);
});

router.get('/:id', auth, async (req, res) => {
  const doc = await model.getGeneratedDoc(req.params.id);
  if (!doc || doc.user_id !== req.userId) return res.sendStatus(404);
  res.json(doc);
});

router.delete('/:id', auth, async (req, res) => {
  const doc = await model.getGeneratedDoc(req.params.id);
  if (!doc || doc.user_id !== req.userId) return res.sendStatus(404);
  await model.deleteGeneratedDoc(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
