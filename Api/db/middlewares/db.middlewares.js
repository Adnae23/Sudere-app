const XLSX = require('xlsx');
const { getTrains } = require('../models/db.models');
const { compare } = require('../../utils/compare');

class DbMiddlewares {

  
  // ********************************** Récupération et copie du fichier Excel
  async storeFile(req, res, next) {
    const file = req.files.excelFile;
    const uploadPath = `./uploadedFiles/${file.name}`;

    await file.mv(uploadPath, (error) => res.status(500).send(error));
    // **********************************  Effacement de la copie du fichier Excel après son intégration dans req
    setTimeout(() => {
      req.xlsFile = XLSX.readFile('./uploadedFiles/Test.xlsm');
      const fs = require('fs');

      fs.unlink('./uploadedFiles/Test.xlsm', (err) => {
        if (err) throw err;
      });
      next();
    }, 3000);
  }

  // ********************************** vérification présence onglet 'Affectation_parc'
  sheetName(req, res, next) {
    const tab = req.xlsFile.SheetNames;
    if (tab.filter((element) => element === 'Affectation_Parc')) {
      next();
    } else { res.status(404).send('resource not found'); }
  }

  // ********************************** Compare les données de Excel avec ceux de la db pour la màj de la db
  async compareData(req, res, next) {
    try {
      const trainsFromDb = await getTrains();
      compare(req, trainsFromDb);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }

    next();
  }
}

module.exports = new DbMiddlewares();
