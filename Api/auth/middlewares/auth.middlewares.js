const { getUserById } = require('../models/auth.models');
const { verifyPassword } = require('../../utils/helperUser');

class AuthMiddlewares {
  // ********************************** vérifie si user bien présent dans la db
  async checkExistingUser(req, res, next) {
    if (req.body.password && req.body.login) {
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
    } else { res.status(400).send('bad request'); }
  }
}
module.exports = new AuthMiddlewares();
