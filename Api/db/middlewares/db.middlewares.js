const { getLines, getSeries, getTrains, getCenters } = require('../models/db.models')
const { compare } = require('../../utils/compare')
const XLSX = require('xlsx');

class DbMiddlewares {

    async storeFile(req, res, next) {
        const file = req.files.excelFile
        const uploadPath = `./uploadedFiles/${file.name}`

        await file.mv(uploadPath, (error) => {
            return res.status(500).send(error)
        })
        res.status(200).send('File uploaded !')
        setTimeout(() => {
            req.xlsFile = XLSX.readFile('./uploadedFiles/Test.xlsm')
            var fs = require('fs');

            fs.unlink('./uploadedFiles/Test.xlsm', function (err) {
                if (err) throw err;
            });
            next()
        }, 3000)

    }

    sheetName(req, res, next) {
        const tab = req.xlsFile.SheetNames;
        if (tab.filter(element => element === 'Affectation_Parc')) {

            next()
        }
        else
            res.status(404).send('resource not found')
    }

    async compareData(req, res, next) {
        try {
            let trainsFromDb = await getTrains()
            compare(req, trainsFromDb)


        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }

        next()
    }

}

module.exports = new DbMiddlewares()