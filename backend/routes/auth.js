const express = require('express');
const jwt = require('jsonwebtoken');
const { createUser, findByUsername } = require('../models/userModel');
const router = express.Router();

const jwtSecret = process.env.JWT_SECRET || 'secretkey';

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await createUser(username, password);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await findByUsername(username);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const bcrypt = require('bcrypt');
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id }, jwtSecret);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
