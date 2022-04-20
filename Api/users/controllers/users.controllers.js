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
            access
        } = req.body;

        // ********************************** Ajoute utilisateur dans la db
        try {
            const result = await UserModel.createUser(id, firstname, lastname, center, hashedPassword, email, access);
            res.status(201).send('User successfully created');
        } catch (error) {
            res.status(500).send({
                error: error.message
            });
        }
    }

    async listUsers(req, res) {
        try {
            const result = await UserModel.getUsers();
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send({
                error: error.message
            });
        }
    }

    async deleteUser(req, res) {
        try {
            const id = req.body.id
            const result = await UserModel.deleteUser(id);
            res.status(200).send('User successfully deleted')
        } catch (error) {
            res.status(500).send({
                error: error.message
            });
        }
    }
}
module.exports = new UserController();