const express = require('express');
const { signIn, logout } = require('./controllers/auth.controllers');
const { checkExistingUser } = require('./middlewares/auth.middlewares');

const router = express.Router();

router.post('/login', [checkExistingUser, signIn]);
router.post('/logout', [logout]);

module.exports = router;
