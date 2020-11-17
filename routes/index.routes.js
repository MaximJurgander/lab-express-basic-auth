const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post('/register', async (req, res, next) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = new User({
    username: username,
    password: hash
  });
  await user.save();
  res.redirect('/');
});

module.exports = router;
