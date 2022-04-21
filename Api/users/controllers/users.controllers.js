const UserModel = require('../models/users.models');

class UserController {
  async createUser(req, res) {
    const {
      id,
      firstname,
      lastname,
      email,
      hashedPassword,
      center,
      access,
    } = req.body;

    // ********************************** Ajoute utilisateur dans la db
    try {
      await UserModel.createUser(id, firstname, lastname, center, hashedPassword, email, access);
      res.status(201).send('User successfully created');
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }

  // ********************************** Récupère la liste des utilisateurs la db
  async listUsers(req, res) {
    try {
      const result = await UserModel.getUsers();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }

  // ********************************** efface un utilisateur de la db
  async deleteUser(req, res) {
    try {
      const { id } = req.body;
      await UserModel.deleteUser(id);
      res.status(200).send('User successfully deleted');
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }

  // ********************************** met a jour un utilisateur dans la db
  async updateUser(req, res) {
    try {
      const {
        id, firstName, lastName, center, access,
      } = req.body;
      await UserModel.updateUser(id, firstName, lastName, center, access);
      res.status(200).send('');
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  // ********************************** met a jour le password d'un utilisateur
  async updateUserPassword(req, res) {
    try {
      const {
        id,hashedPassword,
      } = req.body;
      await UserModel.updateUserPassword(id, hashedPassword);
      res.status(200).send('');
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
module.exports = new UserController();
