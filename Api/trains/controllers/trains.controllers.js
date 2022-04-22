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

    async infoTrainById(req, res) {
        const id = req.params.id
        try {
            const trailer = await TrainsModel.getTrainById(id)
            res.status(200).send(trailer)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    updateTrailer = (req, res) => {
        const { date, processingTime, userId } = req.body

        try {
            TrainsModels.updateTrailers(date, processingTime, userId)
            res.status(201).send('trailer successfuly updated')
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = new TrainsControllers()