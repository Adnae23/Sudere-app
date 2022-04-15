// const connection = require("./db-config")
require("dotenv").config();
const cors = require('cors')
const express = require("express")
const app = express()
const fileUpload = require('express-fileupload')
const dbRouter = require('./db/db.route')
const usersRouter = require('./users/users.route')

app.use(cors())
app.use(express.json())
app.use(fileUpload())

const port = process.env.PORT ?? 5000

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})

app.use('/db', dbRouter)
app.use('/users', usersRouter)
