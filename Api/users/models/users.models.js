const connection = require("../../db-config");

class UserModel {

    async getUsers() {

        // ********************************** récupère la liste des users depuis la db
        try {
            const result = await connection.promise().query('SELECT * FROM users')
            return result[0]
        }
        catch (error) {
            throw error
        }

    }

    async getUsersId(id) {

        // ********************************** récupère un utilisateur spécifique avec son numéro de CP depuis la db
        try {
            const sql = 'SELECT * FROM users WHERE id = ?'
            const result = await connection.promise().query(sql, [id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async createUser(id, firstName, lastName, center, password, access) {

        // ********************************** Crée un utilisateur dans la db
        try {
            const sql = 'INSERT INTO users (id, firstname, lastname, access, password, id_center) VALUES (?, ?, ?, ?, ?, (SELECT id FROM centers WHERE name = ?))'
            const result = await connection.promise().query(sql, [id, firstName, lastName, access, password, center])
            return result[0]
        }
        catch (error) {
            throw error
        }

    }

    async updateUserPassword(id, hashedPassword) {

        // ********************************** Met à jour le MDP dans la db
        try {
            const sql = 'UPDATE INTO users (password) VALUES (?) WHERE id = ?'
            const result = await connection.promise().query(sql, [hashedPassword, id])
            return result[0]
        }
        catch (error) {
            throw error
        }

    }

    async updateUser(id, firstName, lastName, center, access) {

        // ********************************** Met à jour la fiche d'un user dans la db
        try {
            const sql = 'UPDATE INTO users (firstname, lastname, access, id_center) VALUES (?, ?, ?, (SELECT id FROM centers WHERE name = ?)) WHERE id = ?'
            const result = await connection.promise().query(sql, [firstName, lastName, access, center, id])
            return result[0]
        }
        catch (error) {
            throw error
        }

    }

    async deleteUser(id) {

        // ********************************** Suprimme un user dans la db
        try {
            const sql = 'DELETE FROM users WHERE id = ?'
            const result = await connection.promise().query(sql, [id])
            return result[0]
        }
        catch (error) {
            throw error
        }

    }

}