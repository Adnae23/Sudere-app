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
        }

        for (let trainsTrailer = 0; trainsTrailer <= train.trailers; trainsTrailer + 1) {
          if (trainsTrailer !== 3) {
            try {
              await DbModel.replaceTrailer(`R${trainsTrailer + 1}`, train.id);
            } catch (error) {
              throw error;
            }
          }
        }
      });
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
        }
        try {
          await DbModel.deleteTrain(train);
        } catch (error) {
          throw error;
        }
      });
      return res.sendStatus(200);
    } catch (error) {
      return res.status(500).send('deleting error');
    }
  }

  async fetchLines(req, res) {
    try {
      const lines = await DbModel.getLines();
      res.status(200).send(lines);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async fetchSeries(req, res) {
    try {
      const series = await DbModel.getSeries();
      res.status(200).send(series);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async fetchCenters(req, res) {
    try {
      const centers = await DbModel.getCenters();
      res.status(200).send(centers);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new DbController();
