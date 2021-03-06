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
    async updateDatabase(req, res) {

        // ********************************** Ajoute les nouvelles séries dans la db
        try {
            const dropSeries = await DbModel.dropSerie()
            req.series.forEach(async (serie) => {
                await DbModel.insertSerie(serie)
            })
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }

        // ********************************** Ajoute les nouvelles lines dans la db
        try {
            const dropLines = await DbModel.dropLine()
            req.lines.forEach(async (line) => {
                await DbModel.insertLine(line)
            })
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }

        // ********************************** Ajoute/màj les nouvelles rames dans la db et créé les remorque s'il le faut
        try {
            req.trainsReplace.map(async (train) => {
                await DbModel.replaceTrain(train)
                for (let trainsTrailer = 0; trainsTrailer <= train.trailers; trainsTrailer++) {
                    if (trainsTrailer !== 3) {
                        await DbModel.replaceTrailer(`R${trainsTrailer+1}`,train.id)
                    }
                }
            })
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        // res.status(201).send('Insert successfully')
        }
    }
}

module.exports = new DbController()