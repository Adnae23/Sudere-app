const { getLines } = require('../models/db.models')
const compare = require('../../utils/compareLines')

class DbMiddlewares{
    sheetName(req, res, next){
        const tab = req.xlsFile.SheetNames;
        if (tab.filter(element => element === 'Affectation_Parc')){
            next()
        }
        else
            res.status(404).send('resource not found')
    }

    async compareLines(req, res, next){
        try{
            const linesFromDb = await getLines()
            compare(req, linesFromDb)
        }
        catch{

        }
    }
}

module.exports = new DbMiddlewares()