/* eslint-disable no-useless-catch */
/* eslint-disable no-await-in-loop */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
const DbModel = require('../models/db.models');

class DbController {
  async updateDatabase(req, res) {
    // ********************************** Ajoute les nouvelles séries dans la db
    try {
      await DbModel.dropSerie();
      req.series.forEach(async (serie) => {
        await DbModel.insertSerie(serie);
      });
    } catch (error) {
      return res.status(500).send('insert serie error');
    }

    // ********************************** Ajoute les nouvelles lines dans la db
    try {
      await DbModel.dropLine();
      req.lines.forEach(async (line) => {
        await DbModel.insertLine(line);
      });
    } catch (error) {
      return res.status(500).send('insert line error');
    }

    // ********************************** Ajoute/màj les nouvelles rames dans la db et créé les remorque s'il le faut
    try {
      req.trainsReplace.map(async (train) => {
        try {
          await DbModel.replaceTrain(train);
        } catch (error) {
          throw error;
          // res.status(500).send('error');
        }

        for (let trainsTrailer = 0; trainsTrailer <= train.trailers; trainsTrailer + 1) {
          if (trainsTrailer !== 3) {
            try {
              await DbModel.replaceTrailer(`R${trainsTrailer + 1}`, train.id);
            } catch (error) {
              throw error;
              // res.status(500).send('error');
            }
          }
        }
      });
      // res.status(201).send('Insert successfully')
    } catch (error) {
      return res.status(500).send('replacing error');
    }

    // ********************************** Supprime les rames dans la db
    try {
      req.trainsDelete.map(async (train) => {
        try {
          await DbModel.deleteTrailers(train);
        } catch (error) {
          throw error;
          // res.status(500).send('error');
        }
        try {
          await DbModel.deleteTrain(train);
        } catch (error) {
          throw error;
          // res.status(500).send('error');
        }
      });
      return res.sendStatus(200);
      // return '';
    } catch (error) {
      return res.status(500).send('deleting error');
    }
  }
}

module.exports = new DbController();
