const express = require('express');
const {signIn} = require('./controllers/auth.controllers');
const {checkExistingUser} = require('./middlewares/auth.middlewares');

const router = express.Router();

router.post('/login', [checkExistingUser, signIn]);
router.post('/logout', []);

module.exports = router;
