const DbModel = require('../models/db.models')



class DbController {
    async list(req, res) {
        try {
            const  = await DbModel.getLines()
            res.status(200).send(users)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = new DbController()