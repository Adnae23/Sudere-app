const express  = required('express')
const { updateDatabase } = require('./controllers/db.controllers')
const { sheetName } = require('./middlewares/db.middlewares')

const router = express.Router()

router.post('/', [sheetName, updateDatabase])

module.exports = router