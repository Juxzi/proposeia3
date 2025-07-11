const express = require('express');
const router = express.Router();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const templateRoutes = require('./routes/templates');
const generatedRoutes = require('./routes/generatedDocs');

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/templates', templateRoutes);
router.use('/documents', generatedRoutes);

module.exports = router;
