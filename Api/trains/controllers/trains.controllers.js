const TrainsModels = require('../models/trains.models');

class TrainsControllers {
  async infoTrailers(req, res) {
    try {
      const trailers = await TrainsModels.getTrailers();
      res.status(200).send(trailers);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

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
    const {
      date, processingTime, userId, trailerId,
    } = req.body;

    try {
      TrainsModels.updateTrailer(date, processingTime, userId, trailerId);
      res.status(201).send('trailer successfuly updated');
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
}

module.exports = new TrainsControllers();
