const express  = require('express')
const { updateDatabase } = require('./controllers/db.controllers')
const { sheetName, compareData } = require('./middlewares/db.middlewares')

const router = express.Router()

router.post('/', [sheetName, compareData, updateDatabase])
//router.get('/', list)

module.exports = router