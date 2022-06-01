/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable global-require */
/* eslint-disable max-len */
const XLSX = require('xlsx');
const jwt = require('jsonwebtoken');
const { getTrains } = require('../models/db.models');
const { compare } = require('../../utils/compare');
const { decodeToken } = require('../../utils/helperUser');

class DbMiddlewares {
  checkCookie(req, res, next) {
    // ******************************* verifie la présence d'un cookies
    if (!req.cookies) {
      return res.status(404).send('error1');
    }
    // ******************************* verifie la présence d'un user_token dans le cookies
    if (req.cookies.user_token) {
      const token = decodeToken(req.cookies.user_token);
      if (token.profile !== 'ADMIN') {
        return res.sendStatus(403);
      }
      return next();
    }
    return res.status(401).send('ici');
  }

  verifyToken(req, res, next) {
    // ******************************* verifie le contenu du user_token dans le cookies
    const token = req.cookies.user_token;
    try {
      const data = jwt.verify(token, process.env.PRIVATE_KEY);
      if (data) {
        next();
      } else {
        res.sendStatus(500);
      }
    } catch {
      res.status(403).send('error3');
    }
  }

  // ******************************* verifie la présence du fichier excel
  checkFile(req, res, next) {
    if (req.files === null) {
      res.status(404).send('file not found');
    } else {
      next();
    }
  }

  // ********************************** Récupération et copie du fichier Excel
  async storeFile(req, res, next) {
    const file = req.files.excelFile;
    const uploadPath = `./uploadedFiles/${file.name}`;

    await file.mv(uploadPath, (error) => console.log(error));
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
