/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/no-unresolved
const Joi = require('Joi');
const { getUserById } = require('../../users/models/users.models');

class TrainsMiddlewares {
  // ********************************** verifie la présence des données entrantes (date - temps - user)
  checkBody(req, res, next) {
    if (!req.body.date || !req.body.processingTime || !req.body.userId) {
      res.status(400).send('bad request');
    } else {
      next();
    }
  }

  // ********************************** verifie la conformité des données entrantes
  checkShapingForTrailers(req, res, next) {
    const { date, processingTime, userId } = req.body;
    const { error } = Joi.object({
      date: Joi.string().required(),
      processingTime: Joi.number().required(),
      userId: Joi.string().min(8).max(8).required(),
    }).validate({ date, processingTime, userId }, { abortEarly: false });
    if (error) {
      res.status(422).json({ ValidationErrors: error });
    } else {
      next();
    }
  }

  // ********************************** verifie la présence de user
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
