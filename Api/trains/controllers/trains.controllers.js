/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
const TrainsModels = require('../models/trains.models');

class TrainsControllers {
  // ******************************* recherche les info des trailers
  async infoTrailers(req, res) {
    try {
      const trailers = await TrainsModels.getTrailers();
      res.status(200).send(trailers);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  // ******************************* recherche les info des trailers suivant l'ID
  async infoTrainById(req, res) {
    const { id } = req.params;
    try {
      const trailer = await TrainsModels.getTrainById(id);
      res.status(200).send(trailer);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  updateTrailer = (req, res) => {
    // ******************************* récupere les données entrantes pour la MàJ
    const {
      date, processingTime, userId, trailerId, trainId, oldDate, oldProcessingTime, oldUserId,
    } = req.body;

    try {
      TrainsModels.updateTrailer(date, processingTime, userId, trailerId, trainId, oldDate, oldProcessingTime, oldUserId);
      res.status(201).send('trailer successfuly updated');
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
}

module.exports = new TrainsControllers();
