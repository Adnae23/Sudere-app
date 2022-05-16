/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
const { getUserById } = require('../models/auth.models');
const { calculateToken, expireToken } = require('../../utils/helperUser');

class UserController {
  async signIn(req, res) {
    const cp = req.body.login;
    const user = await getUserById(cp);
    console.log(user[0]);
    const token = await calculateToken(cp, user[0].firstname, user[0].lastname, user[0].center, user[0].profile);
    res.cookie('user_token', token, { httpOnly: true });
    res.status(200).send(token);
  }

  async logout(req, res) {
    const token = await expireToken();
    res.cookie('user_token', token, { httpOnly: true });
    res.status(200).send('disconnected');
  }

  refresh(req, res) {
    const token = req.cookies.user_token;
    res.status(200).send(token);
  }
}

module.exports = new UserController();
