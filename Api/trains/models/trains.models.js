/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-useless-catch */
/* eslint-disable class-methods-use-this */
const connection = require('../../db-config');

class TrainsModel {
  async getTrainById(id) {
    try {
      const sql = 'SELECT `lines`.name AS line, series.name AS serie, trains.id AS train, users.id AS CP, users.firstname, users.lastname, centers.name AS center, number AS trailer, trailers.id, trailers.date, trailers.id_user, trailers.processingTime, trailers.oldDATE AS oldDate, trailers.oldProcessingTime, trailers.oldId_user AS oldUserId FROM trailers INNER JOIN trains ON trains.id = trailers.id_train INNER JOIN `lines` ON`lines`.id = trains.id_line INNER JOIN series ON series.id = trains.id_serie INNER JOIN users ON users.id = trailers.id_user INNER JOIN centers ON centers.id = users.id_center WHERE id_train=? ORDER BY trailers.id';
      const result = await connection.promise().query(sql, [id]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async getTrailers() {
    try {
      const sql = 'SELECT number, trains.id, `lines`.name AS line, series.name AS serie, trailers.date, trailers.id_user, trailers.oldDATE AS oldDate, trailers.oldProcessingTime, trailers.oldId_user AS oldUserId FROM trailers INNER JOIN trains ON trains.id = trailers.id_train INNER JOIN `lines` ON`lines`.id = trains.id_line INNER JOIN series ON series.id = trains.id_serie';
      const result = await connection.promise().query(sql);
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async updateTrailer(date, processingTime, userId, trailerId, trainId, oldDate, oldProcessingTime, oldUserId) {
    try {
      const sql = 'UPDATE trailers SET date = ? , processingTime = ?, id_user = ?, oldDATE = ? , oldProcessingTime = ?, oldId_user = ? WHERE number = ? AND id_train = ?';
      const result = await connection.promise().query(sql, [date, processingTime, userId, oldDate, oldProcessingTime, oldUserId, trailerId, trainId]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new TrainsModel();
