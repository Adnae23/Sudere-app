const express = require('express');
const { signIn, logout, refresh } = require('./controllers/auth.controllers');
const { checkExistingUser, checkCookie, verifyToken } = require('./middlewares/auth.middlewares');

const router = express.Router();

router.post('/login', [checkExistingUser, signIn]);
router.post('/logout', [logout]);
router.get('/', [checkCookie, verifyToken, refresh]);

module.exports = router;
