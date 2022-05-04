/* eslint-disable class-methods-use-this */
const { getUserById } = require('../models/auth.models');
const { calculateToken, expireToken } = require('../../utils/helperUser');

class UserController {
  async signIn(req, res) {
    const cp = req.body.login;
    const user = await getUserById(cp);
    const token = await calculateToken(cp, user[0].access);
    res.cookie('user_token', token, { httpOnly: true });
    res.status(200).send('connected');
  }

  async logout(req, res) {
    const token = await expireToken();
    res.cookie('user_token', token, { httpOnly: true });
    res.status(200).send('deconnected');
  }
}

module.exports = new UserController();
