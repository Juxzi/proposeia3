const express = require('express');
const jwt = require('jsonwebtoken');
const { findById, deleteUser } = require('../models/userModel');
const router = express.Router();

const jwtSecret = process.env.JWT_SECRET || 'secretkey';

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, jwtSecret);
    req.userId = payload.id;
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
}

router.get('/me', authMiddleware, async (req, res) => {
  const user = await findById(req.userId);
  if (!user) return res.sendStatus(404);
  res.json(user);
});

router.delete('/me', authMiddleware, async (req, res) => {
  await deleteUser(req.userId);
  res.sendStatus(204);
});

module.exports = router;
