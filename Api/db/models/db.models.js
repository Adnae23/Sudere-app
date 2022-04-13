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

    async dropLine() {
        try{
            await this.connection.promise().query('TRUNCATE TABLE `lines`')
        }
        catch (error){
            throw error
        }
    }

    async insertLine(line) {
        try{
            const result = await this.connection.promise().query('INSERT INTO `lines` (name) VALUES (?)', [line])
            return result[0]
        }
        catch (error){
            throw error
        }
    }

    async dropSerie() {
        try{
            await this.connection.promise().query('TRUNCATE TABLE series')
        }
        catch (error){
            throw error
        }
    }

    async insertSerie(serie) {
        try{
            const result = await this.connection.promise().query('INSERT INTO series (name) VALUES (?)', [serie])
            return result[0]
        }
        catch (error){
            throw error
        }
    }

    async replaceTrain(train) {
        try{
            const sql = 'REPLACE INTO trains (id, id_line, id_serie) VALUES (? , (SELECT id FROM `lines` WHERE name = ?), (SELECT id FROM series WHERE name = ?))'
            const result = await this.connection.promise().query(sql, [train.id, train.line, train.serie])
            return result[0]
        }
        catch (error){
            throw error
        }
    }

    async replaceTrailer(trailer, id) {
        try {
            const sql = 'REPLACE INTO trailers (number, id_train) VALUES (?, (SELECT id FROM trains WHERE id = ?))'
            const result = await this.connection.promise().query(sql, [trailer, id])
            return result[0]
        }
        catch(error){
            throw error
        }
    }


}

module.exports = new DbModel()