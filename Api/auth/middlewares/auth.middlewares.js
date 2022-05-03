const { getUserById } = require('../models/auth.models');
const {verifyPassword} = require('../../utils/helperUser');

class AuthMiddlewares {
    // ********************************** vérifie si user bien présent dans la db
    async checkExistingUser(req, res, next) {
        const { password, login } = req.body
        const existingUser = await getUserById(login);
        const { hashedPassword } = existingUser
        if (existingUser.length === 0) {
            res.status(404).send('User or Password does not match');
        } else if (!verifyPassword(password,hashedPassword)) {
            res.status(404).send('User or Password does not match');
        } else {
            next();
        }
    }



}

module.exports = new AuthMiddlewares();