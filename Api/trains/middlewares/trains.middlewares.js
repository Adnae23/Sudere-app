const{updateTrailers} = require('../models/trains.models')

class trainsMiddlewares{
    verifyTrailers(req, res) {
        const {trailer} = Joi.object({
            date: Joi.string().required(),
            processing_time: Joi.string().required(),
        }).validate({date, processing_time},{abortEarly: false});
        if (trailer) {
            res.status(422).json({ValidationErrors: error});
        }
        else{
            res.status(201).json(updateTrailers)
        }
            
    }

}

module.exports = new trainsMiddlewares() 