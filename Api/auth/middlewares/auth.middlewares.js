/* eslint-disable class-methods-use-this */
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
    const existingUser = await getUserById(login);
    const hashedPassword = existingUser[0].password;
    if (existingUser.length === 0) {
      res.status(404).send('User or Password does not match');
    } else if (!await verifyPassword(password, hashedPassword)) {
      res.status(404).send('User or Password does not match');
    } else {
      next();
    }
  }
}
module.exports = new AuthMiddlewares();
