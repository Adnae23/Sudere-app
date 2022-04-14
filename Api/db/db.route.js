const express  = require('express')
const { updateDatabase } = require('./controllers/db.controllers')
const { storeFile, sheetName, compareData, test } = require('./middlewares/db.middlewares')

const router = express.Router()

//  router.post('/', [storeFile, test])
router.post('/', [storeFile, sheetName, compareData, updateDatabase])
//router.get('/', list)

module.exports = router