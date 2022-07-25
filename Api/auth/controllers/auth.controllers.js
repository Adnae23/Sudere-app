/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
const { getUserById } = require('../models/auth.models');
const { calculateToken, expireToken } = require('../../utils/helperUser');

class UserController {

  // Connexion d'un utilisateur et renvoie d'un cookie et d'un token de connexion
  async signIn(req, res) {
    const cp = req.body.login;
    const user = await getUserById(cp);
    const token = await calculateToken(cp, user[0].firstname, user[0].lastname, user[0].email, user[0].center, user[0].profile);
    res.cookie('user_token', token, { httpOnly: true });
    res.status(200).send(token);
  }


  // Déconnexion d'un utilisateur par remplacement du cookie existant par un cookie à expiration immédiate
  async logout(req, res) {
    const expiredToken = await expireToken();
    res.clearCookie('user_token');
    res.cookie('user_token', expiredToken, { httpOnly: true }).status(200).send('disconnected');
  }

  // Méthode de renvoie du token existant en cas de rafraichissement de page
  refresh(req, res) {
    const token = req.cookies.user_token;
    res.status(200).send(token);
  }
}

module.exports = new UserController();
