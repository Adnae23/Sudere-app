/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
const jwt = require('jsonwebtoken');
const { getUserById } = require('../models/auth.models');
const { verifyPassword } = require('../../utils/helperUser');

class AuthMiddlewares {
  checkBody(req, res, next) {
    if (req.body.password && req.body.login) {
      next();
    } else {
      res.status(400).send('bad request');
    }
  }

  // ********************************** vérifie si user bien présent dans la db
  async checkExistingUser(req, res, next) {
    const { password, login } = req.body;
    let existingUser = '';
    let hashedPassword = '';
    try {
      existingUser = await getUserById(login);
      hashedPassword = existingUser[0].password;
    } catch (error) {
      return res.status(500).send('oups');
    }
    if (existingUser.length === 0) {
      return res.status(404).send('User or Password does not match');
    } if (!await verifyPassword(password, hashedPassword)) {
      return res.status(404).send('User or Password does not match');
    }
    return next();
  }

  checkCookie(req, res, next) {
    if (!req.cookies) {
      return res.status(403).send('error1');
    }
    if (req.cookies.user_token) {
      return next();
    }
    return res.status(403).send('error2');
  }

  verifyToken(req, res, next) {
    const token = req.cookies.user_token;
    try {
      const data = jwt.verify(token, process.env.PRIVATE_KEY);
      if (data) {
        next();
      } else {
        res.sendStatus(500);
      }
    } catch {
      res.status(403).send('error3');
    }
  }
}
module.exports = new AuthMiddlewares();
