const express = require('express');
const jwt = require('jsonwebtoken');
const templateModel = require('../models/templateModel');
const router = express.Router();

const jwtSecret = process.env.JWT_SECRET || 'secretkey';

function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  try {
    jwt.verify(token, jwtSecret);
    next();
  } catch (err) {
    res.sendStatus(401);
  }
}

router.post('/', auth, async (req, res) => {
  const template = await templateModel.createTemplate(req.body);
  res.status(201).json(template);
});

router.get('/', auth, async (req, res) => {
  const templates = await templateModel.getTemplates();
  res.json(templates);
});

router.get('/:id', auth, async (req, res) => {
  const template = await templateModel.getTemplate(req.params.id);
  if (!template) return res.sendStatus(404);
  res.json(template);
});

router.put('/:id', auth, async (req, res) => {
  const template = await templateModel.updateTemplate(req.params.id, req.body);
  res.json(template);
});

router.delete('/:id', auth, async (req, res) => {
  await templateModel.deleteTemplate(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
