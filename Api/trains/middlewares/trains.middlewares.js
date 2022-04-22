const {getUserById} = require('../../users/models/users.models')
const Joi = require('Joi')

class trainsMiddlewares{
    checkShapingForTrailers(req, res, next) {
        const { date, processingTime, userId } = req.body
        const {error} = Joi.object({
            date: Joi.string().required(),
            processingTime: Joi.number().required(),
            userId: Joi.string().min(8).max(8).required()
        }).validate({date, processingTime, userId},{abortEarly: false});
        if (error) {
            res.status(422).json({ValidationErrors: error});
        }
        else{
            next()
        }
    }

    async checkExistingUser(req, res, next) {
        const {userId} = req.body
        const existingUser = await getUserById(userId);
        if (existingUser.length === 0) {
          res.status(404).send('User not found');
        } else {
          next();
        }
      }
}

module.exports = new trainsMiddlewares() 