/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
const jwt = require('jsonwebtoken');
const Joi = require('Joi');
const { getUserById } = require('../../users/models/users.models');

class TrainsMiddlewares {
  // ******************************* verifie la présence d'un cookies
  checkCookie(req, res, next) {
    if (!req.cookies) {
      return res.status(404).send('error1');
    }
    if (req.cookies.user_token) {
      return next();
    }
    return res.status(401).send('error2');
  }

  // ******************************* verifie la présence d'un user_token dans le cookies
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

  // ******************************* verifie la présence de toutes les données pour une MaJ
  checkBody(req, res, next) {
    // eslint-disable-next-line max-len
    if (!req.body.date || !req.body.userId || !req.body.trailerId || !req.body.trainId || !req.body.oldDate || !req.body.oldUserId) {
      res.status(400).send('bad request');
    } else {
      next();
    }
  }

  checkShapingForTrailers(req, res, next) {
    // ******************************* verifie la conformité des données
    const {
      date, processingTime, userId, trailerId, trainId, oldDate, oldProcessingTime, oldUserId,
    } = req.body;
    const { error } = Joi.object({
      date: Joi.string().required(),
      oldDate: Joi.string().required(),
      processingTime: Joi.number().required(),
      oldProcessingTime: Joi.number().required(),
      userId: Joi.string().min(8).max(8).required(),
      oldUserId: Joi.string().min(8).max(8).required(),
      trailerId: Joi.number().required(),
      trainId: Joi.number().required(),
    }).validate({
      date, processingTime, userId, trailerId, trainId, oldDate, oldProcessingTime, oldUserId,
    }, { abortEarly: false });
    if (error) {
      res.status(422).json({ ValidationErrors: error });
    } else {
      next();
    }
  }

  async checkExistingUser(req, res, next) {
    // ******************************* verifie l'existance du user dans la db'
    const { userId } = req.body;
    const existingUser = await getUserById(userId);
    if (existingUser.length === 0) {
      res.status(404).send('User not found');
    } else {
      next();
    }
  }
}

module.exports = new TrainsMiddlewares();
