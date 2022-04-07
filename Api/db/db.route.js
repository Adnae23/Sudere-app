const express  = require('express')
const { list } = require('./controllers/db.controllers')
const { sheetName } = require('./middlewares/db.middlewares')

const router = express.Router()

// router.post('/', [sheetName, updateDatabase])
router.get('/', list)

module.exports = router