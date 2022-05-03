const { getUserById } = require('../models/auth.models');
const { calculateToken } = require('../../utils/helperUser');

class UserController {
  async signIn(req, res) {
    const cp = req.body.login;
    const user = await getUserById(cp);
    const token = await calculateToken(cp, user[0].access);
    res.cookie('user_token', token, { httpOnly: true });
    res.status(200).send('connected');
  }
}

module.exports = new UserController();
