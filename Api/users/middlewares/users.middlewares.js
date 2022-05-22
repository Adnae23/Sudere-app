/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { getUserById } = require('../models/users.models');
const { hashPassword, decodeToken } = require('../../utils/helperUser');

class UsersMiddlewares {
  checkCookie(req, res, next) {
    if (!req.cookies) {
      return res.status(404).send('cookies not found');
    }
    if (req.cookies.user_token) {
      return next();
    }
    return res.sendStatus(401);
  }

  checkProfile(req, res, next) {
    const token = decodeToken(req.cookies.user_token);
    if (token.profile !== 'ADMIN' && token.profile !== 'REFERENT') {
      return res.status(403).send('no authorized');
    }
    return next();
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

  checkBodyId(req, res, next) {
    if (!req.body.id) {
      res.status(400).send('bad request1');
    } else {
      next();
    }
  }

  checkBody(req, res, next) {
    req.body.password = 'defaultpassword';
    if (!req.body.id || !req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password || !req.body.center || !req.body.profile) {
      res.status(400).send('bad request2');
    } else {
      next();
    }
  }

  checkBodyForUpdate(req, res, next) {
    if (!req.body.id || !req.body.firstname || !req.body.lastname || !req.body.center || !req.body.profile) {
      res.status(400).send('bad request3');
    } else {
      next();
    }
  }

  checkRequestProfile(req, res, next) {
    const { tokenProfile } = req.cookies.user_token;
    const { bodyProfile } = req.body;
    if (bodyProfile === 'ADMIN' && tokenProfile !== 'ADMIN') {
      res.sendStatus(401);
    } else {
      next();
    }
  }

  checkBodyForPassword(req, res, next) {
    if (!req.body.previous || !req.body.new || !req.body.confirm) {
      res.status(400).send('bad request4');
    } else {
      next();
    }
  }

  // ********************************** vérifie si user déjà présent dans la db
  async checkNotExistingUser(req, res, next) {
    const existingUser = await getUserById(req.body.id);
    if (existingUser.length !== 0) { res.status(409).send('Failed to create user'); } else { next(); }
  }

  // ********************************** vérifie si user bien présent dans la db
  async checkExistingUser(req, res, next) {
    const existingUser = await getUserById(req.body.id);
    if (existingUser.length === 0) {
      res.status(404).send('User not found');
    } else {
      next();
    }
  }

  // ********************************** vérifie les critères de validation
  checkShaping(req, res, next) {
    const {
      id, firstname, lastname, email, password, center, profile,
    } = req.body;

    const { error } = Joi.object({
      id: Joi.string().min(8).max(8).required(),
      firstname: Joi.string().max(255).required(),
      lastname: Joi.string().max(255).required(),
      email: Joi.string().email().max(255).required(),
      password: Joi.string().min(8).max(255).required(),
      center: Joi.string().max(255).required(),
      profile: Joi.string().max(255).required(), // user - superUser - admin
    }).validate({
      id, firstname, lastname, email, password, center, profile,
    }, { abortEarly: false });

    if (error) {
      res.status(422).json({ validationErrors: error.details });
    } else {
      next();
    }
  }

  // ********************************** vérifie les critères du password
  checkShapingForPassword(req, res, next) {
    const { newPassword, confirmPassword } = req.body;

    if (newPassword !== confirmPassword) {
      res.sendStatus(422);
    } else {
      const { error } = Joi.object({
        password: Joi.string().min(8).max(255).required(),
      }).validate({
        newPassword,
      }, { abortEarly: false });

      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        next();
      }
    }
  }

  // ********************************** vérifie les critères des validation pour la mise à jour d'un utilisateur
  checkShapingForUpdate(req, res, next) {
    const {
      id, firstname, lastname, center, profile,
    } = req.body;

    const { error } = Joi.object({
      id: Joi.string().min(8).max(8).required(),
      firstname: Joi.string().max(255).required(),
      lastname: Joi.string().max(255).required(),
      center: Joi.string().max(255).required(),
      profile: Joi.string().max(255).required(), // user - superUser - admin
    }).validate({
      id, firstname, lastname, center, profile,
    }, { abortEarly: false });

    if (error) {
      res.status(422).json({ validationErrors: error.details });
    } else {
      next();
    }
  }

  // ********************************** hashage du password
  async hash(req, res, next) {
    const { password } = req.body;
    req.body.hashedPassword = await hashPassword(password);
    next();
  }
}

module.exports = new UsersMiddlewares();
