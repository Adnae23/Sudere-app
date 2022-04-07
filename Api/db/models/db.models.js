const mysql = require('mysql2')

class DbModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    async getLines() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM lines')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async getSeries() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM series')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async getTrains() {
        try {
            const result = await this.connection.promise().query('SELECT trains.id AS train, lines.name AS line, series.name AS serie FROM trains INNER JOIN `lines` ON lines.id = trains.id_line INNER JOIN series ON series.id = trains.id_serie')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
    
}

module.exports = new DbModel()