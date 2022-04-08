const { getLines, getSeries, getTrains } = require('../models/db.models')
const compare = require('../../utils/compare')

class DbMiddlewares{
    sheetName(req, res, next){
        const tab = req.xlsFile.SheetNames;
        if (tab.filter(element => element === 'Affectation_Parc')){
            
            next()
        }
        else
            res.status(404).send('resource not found')
    }

    async compareData(req, res, next){
        const trainsFromDb = null
        try{
            trainsFromDb = await getTrains()
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
        compare(req, trainsFromDb)
        next()
    }
}

module.exports = new DbMiddlewares()