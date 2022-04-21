const connection = require('../../db-config');

class DbModel {
  // connection = mysql.createConnection({
  //     host: process.env.DB_HOST,
  //     port: process.env.DB_PORT,
  //     user: process.env.DB_USER,
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB_NAME,
  // })

  async getCenters() {
    // ********************************** récupère la liste des centres depuis la db
    try {
      const result = await connection.promise().query('SELECT * FROM centers');
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async getLines() {
    // ********************************** récupère la liste des lines depuis la db
    try {
      const result = await connection.promise().query('SELECT * FROM `lines`');
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async getSeries() {
    // ********************************** récupère la liste des séries depuis la db
    try {
      const result = await connection.promise().query('SELECT * FROM series');
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async getTrains() {
    // ********************************** récupère la liste des rames, lines et séries depuis la db
    try {
      const result = await connection.promise().query('SELECT trains.id AS train, `lines`.name AS line, series.name AS serie FROM trains INNER JOIN `lines` ON `lines`.id = trains.id_line INNER JOIN series ON series.id = trains.id_serie');
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async dropLine() {
    // ********************************** Efface la liste des lines dans la db
    try {
      const result = await connection.promise().query('DELETE FROM `lines`');
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async insertLine(line) {
    // ********************************** Ajoute les nouvelles lines dans la db
    try {
      const result = await connection.promise().query('INSERT INTO `lines` (name) VALUES (?)', [line]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async dropSerie() {
    // ********************************** Efface la liste des séries dans la db
    try {
      const result = await connection.promise().query('DELETE FROM series');
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async insertSerie(serie) {
    // ********************************** Ajoute les nouvelles séries dans la db
    try {
      const result = await connection.promise().query('INSERT INTO series (name) VALUES (?)', [serie]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async replaceTrain(train) {
    // ********************************** Ajoute/màj les rames dans la db
    try {
      const sql = 'REPLACE INTO trains (id, id_line, id_serie) VALUES (? , (SELECT id FROM `lines` WHERE name = ?), (SELECT id FROM series WHERE name = ?))';
      const result = await connection.promise().query(sql, [train.id, train.line, train.serie]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async replaceTrailer(trailer, id) {
    // ********************************** Ajoute/màj les trailes dans la db
    try {
      const sql = 'REPLACE INTO trailers (number, id_train) VALUES (?, (SELECT id FROM trains WHERE id = ?))';
      const result = await connection.promise().query(sql, [trailer, id]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteTrain(id) {
    try {
      const sql = 'DELETE FROM trains WHERE id = ?';
      const result = await connection.promise().query(sql, [id]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteTrailers(id) {
    try {
      const sql = 'DELETE FROM trailers WHERE id_train = ?';
      const result = await connection.promise().query(sql, [id]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new DbModel();
