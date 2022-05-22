/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
const jwt = require('jsonwebtoken');
const Joi = require('Joi');
const { getUserById } = require('../../users/models/users.models');

class TrainsMiddlewares {
  checkCookie(req, res, next) {
    if (!req.cookies) {
      return res.status(404).send('error1');
    }
    if (req.cookies.user_token) {
      return next();
    }
    return res.status(401).send('error2');
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

  checkBody(req, res, next) {
    // eslint-disable-next-line max-len
    if (!req.body.date || !req.body.processingTime || !req.body.userId || !req.body.trailerId || !req.body.trainId) {
      res.status(400).send('bad request');
    } else {
      next();
    }
  }

  checkShapingForTrailers(req, res, next) {
    const {
      date, processingTime, userId, trailerId, trainId,
    } = req.body;
    const { error } = Joi.object({
      date: Joi.string().required(),
      processingTime: Joi.number().required(),
      userId: Joi.string().min(8).max(8).required(),
      trailerId: Joi.number().required(),
      trainId: Joi.number().required(),
    }).validate({
      date, processingTime, userId, trailerId, trainId,
    }, { abortEarly: false });
    if (error) {
      res.status(422).json({ ValidationErrors: error });
    } else {
      next();
    }
  }

  async checkExistingUser(req, res, next) {
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
