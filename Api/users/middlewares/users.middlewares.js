const {getUserById} = require('../models/users.models');
const Joi = require('joi');
const {hashPassword, verifyPassword} = require('../../utils/helperUser');

class UsersMiddlewares {

    // ********************************** vérifie si user déjà présent dans la db
    async checkNotExistingUser(req, res, next){
        const existingUser = await getUserById(req.body.id);
        console.log(existingUser);
        if (existingUser.length !== 0) // si existe
            res.status(409).send('Failed to create user');
        else
            next();
    }

    // ********************************** vérifie si user bien présent dans la db
    async checkExistingUser(req, res, next){
        const existingUser = await getUserById(req.body.id);
        console.log(existingUser);
        if (existingUser.length === 0) // si existe
            res.status(404).send('User not found');
        else
            next();
    }

    // ********************************** vérifie les critères de validation
    checkShaping(req, res, next){
    
        const {id, firstname, lastname, email, password, center, access} = req.body;

        const { error } = Joi.object({
        id: Joi.string().min(8).max(8).required(),
        firstname: Joi.string().max(255).required(),
        lastname: Joi.string().max(255).required(),
        email: Joi.string().email().max(255).required(),
        password: Joi.string().max(255).required(),
        center: Joi.string().max(255).required(),
        access: Joi.string().max(255).required(),//user - superUser - admin
      }).validate({ id, firstname, lastname, email, password, center, access }, { abortEarly: false });
      
      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        next();
      }
    } 

    // ********************************** hashage du password
    async hash(req, res, next){
        const password = req.body.password;
        req.body.hashedPassword = await hashPassword(password);
        next();
    }
}

module.exports = new UsersMiddlewares();