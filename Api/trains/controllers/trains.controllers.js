const TrainsModel = require('../models/trains.models')

class TrainsControllers {

    async infoTrailers(req, res) {
        try {
            const trailers = await TrainsModel.getTrailers()
            res.status(200).send(trailers)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async infoTrainById(req, res){
        const  id = req.params.id
        try {
            const trailer = await TrainsModel.getTrainById(id)
            res.status(200).send(trailer)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    modifyTrailers = (req,res)=> {
        const { date, processing_time, id_user} = req.body

        TrainsModels.updateTrailers(date, processing_time, id_user)
        }
}

module.exports = new TrainsControllers()