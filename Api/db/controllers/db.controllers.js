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
        try {
            const dropLines = await DbModel.dropLine()
            req.lines.map((line) =>{
                const updateLine = await DbModel.insertLine(line)
            })
            const dropSeries = await DbModel.dropSerie()
            req.series.map((serie) =>{
                const updateSerie = await DbModel.insertSerie(serie)
            })
            req.trains.map((train) => {
                const replaceTrains = await DbModel.replaceTrain(train)
                for(let trainsTrailer = 0; trainsTrailer <= train.trailers; trainsTrailer ++) {
                    if(trainsTrailer !== 3){
                        const addTrailer = await DbModel.insertTrailer(`R${trainsTrailer+1}`,train.id)
                        //finir le model, voir si remorque existe déjà
                    }
                }
            })
            res.status(201).send('Insert successfully')
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = new DbController()