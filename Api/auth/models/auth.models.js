const connection = require('../../db-config');

class AuthModels {
  async getUserById(id) {
    // ********************************** récupère un utilisateur spécifique avec son numéro de CP depuis la db
    try {
      const sql = 'SELECT * FROM users WHERE id = ?';
      const result = await connection.promise().query(sql, [id]);
      return result[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthModels();
