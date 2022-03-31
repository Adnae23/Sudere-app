const connection = require("./db-config")
const express = require("express")
const app = express()
const data = require("./majdb")

const port = process.env.PORT ?? 3000

connection.connect((error) => {
	if(error)
		console.error("Error connecting : " + error.stack)
	else 
		console.log("Connected to database with threadId : " + connection.threadId)
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})

let trains = [...data[0]]
let lines = [...data[1]]
let series = [...data[2]]

console.log(trains)
console.log(lines)
console.log(series)

lines.map(line => {
    let test = connection.query("SELECT * FROM `lines` WHERE name = ?", [line])
    
        console.log(test)
    
})