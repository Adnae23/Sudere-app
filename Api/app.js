const connection = require("./db-config")
const cors =require('cors')
const express = require("express")
const app = express()
// const data = require("./majdb")
const dbRouter = require('./db/db.route')

app.use(cors())
app.use(express.json())

const port = process.env.PORT ?? 5000

connection.connect((error) => {
	if(error)
		console.error("Error connecting : " + error.stack)
	else 
		console.log("Connected to database with threadId : " + connection.threadId)
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})

app.use('/db', dbRouter)

// let trains = [...data[0]]
// let lines = [...data[1]]
// let series = [...data[2]]

// // console.log(trains)
// // console.log(lines)
// // console.log(series)

// // ******************************** ON PARCOUR LES LIGNES DE LINES
// lines.map(line => {
// 	let existLine = '';
// 	const db = connection.promise();
// 	const sqlSelect = 'SELECT COUNT(*) AS lineCount FROM `lines` WHERE name = ?'
// 	const sqlInsert = 'INSERT INTO `lines` SET name= ?'
// 	// *************************** ON VERIFIE SI ELLE EXISTE DEJA LA TABLE
//     db.query(sqlSelect, [line]).then((result) =>{
// 		existLine = result[0][0].lineCount;
// 		// console.log(result[0][0].lineCount);
// 		// *********************** SI ELLE N'EXISTE PAS => ON L'INSERT
// 		if(existLine === 0) {
// 			return db.query(sqlInsert, [line])
// 		}
// 		else
// 			return Promise.reject('ALREADY_EXIST')
// 	})
// 	.then(() => {
// 		console.log('Insert successful');
// 	})
// 	.catch(err => {
// 		if (err === 'ALREADY_EXIST') 
// 			console.log('line already exist');
// 	})
// })

// // ******************************** ON PARCOUR LES LIGNES DE SERIES
// series.map(serie => {
// 	let existSerie = '';
// 	const db = connection.promise();
// 	const sqlSelect = 'SELECT COUNT(*) AS serieCount FROM series WHERE name = ?'
// 	const sqlInsert = 'INSERT INTO series SET name= ?'
//     db.query(sqlSelect, [serie]).then((result) =>{
// 	// *************************** ON VERIFIE SI ELLE EXISTE DEJA LA TABLE
// 		existSerie = result[0][0].serieCount;
// 		// *********************** SI ELLE N'EXISTE PAS => ON L'INSERT
// 		if(existSerie === 0) {
// 			return db.query(sqlInsert, [serie])
// 		}
// 		else
// 			return Promise.reject('ALREADY_EXIST')
// 	})
// 	.then(() => {
// 		console.log('Insert successful');
// 	})
// 	.catch(err => {
// 		if (err === 'ALREADY_EXIST') 
// 			console.log('Serie already exist');
// 	})
// })

// trains.map(train => {
// 	let existTrain = '';
// 	const db = connection.promise();
// 	const sqlSelect = 'SELECT COUNT(*) AS trainCount FROM trains WHERE id = ?'
// 	const sqlInsert = 'INSERT INTO trains (id, id_line, id_serie) VALUES (? , (SELECT id FROM `lines` WHERE name = ?), (SELECT id FROM series WHERE name = ?))'
//     db.query(sqlSelect, [train.id]).then((result) =>{
// 	// *************************** ON VERIFIE SI ELLE EXISTE DEJA LA TABLE
// 		existTrain = result[0][0].trainCount;
// 		// *********************** SI ELLE N'EXISTE PAS => ON L'INSERT
// 		if(existTrain === 0) {
// 			return db.query(sqlInsert, [train.id, train.line, train.serie])
// 		}
// 		else
// 			return Promise.reject('ALREADY_EXIST')
// 	})
// 	.then(() => {
// 		console.log('Insert successful');
// 	})
// 	.catch(err => {
// 		if (err === 'ALREADY_EXIST') 
// 			console.log('Train already exist');
// 	})
// })
