/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-catch */
const connection = require('../../db-config');

class AuthModels {
  async getUserById(id) {
    // Récupère un utilisateur spécifique avec son numéro de CP depuis la db
    try {
      const sql = 'SELECT users.id, firstname, lastname, email, password, centers.name AS center' +
      ', profiles.name AS profile FROM users INNER JOIN centers ON centers.id = users.id_center' + 
      'INNER JOIN profiles ON profiles.id = users.id_profile WHERE users.id=? ';
      const result = await connection.promise().query(sql, [id]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthModels();
