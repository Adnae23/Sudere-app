const connection = require('../../db-config');

class TrainsModel {
  async getTrainById(id) {
    try {
      const sql = 'SELECT `lines`.name AS line, series.name AS serie, trains.id AS train, users.id AS CP, users.firstname, users.lastname, centers.name AS center, number AS trailer, trailers.id, `date`, processingTime FROM trailers INNER JOIN trains ON trains.id = trailers.id_train INNER JOIN `lines` ON`lines`.id = trains.id_line INNER JOIN series ON series.id = trains.id_serie INNER JOIN users ON users.id = trailers.id_user INNER JOIN centers ON centers.id = users.id_center WHERE id_train=?';
      const result = await connection.promise().query(sql, [id]);
      console.log(result[0]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async getTrailers() {
    try {
      const sql = 'SELECT number, trains.id, `lines`.name AS line, series.name AS serie, trailers.date FROM trailers INNER JOIN trains ON trains.id = trailers.id_train INNER JOIN `lines` ON`lines`.id = trains.id_line INNER JOIN series ON series.id = trains.id_serie';
      const result = await connection.promise().query(sql);
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async updateTrailer(date, processingTime, userId, trailerId) {
    try {
      const sql = 'UPDATE trailers SET date = ? , processingTime = ?, id_user = ? WHERE id = ?';
      const result = await connection.promise().query(sql, [date, processingTime, userId, trailerId]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new TrainsModel();
