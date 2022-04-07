const DbModel = require('../models/db.models')



class DbController {
    async list(req, res) {
        try {
            const trains = await DbModel.getTrains()
            res.status(200).send(trains)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = new DbController()