const express  = require('express')
const { } = require('./controllers/users.controllers')
const { } = require('./middlewares/users.middlewares')

const router = express.Router()

router.post('/', [])
router.get('/', [])
router.put('/', [])
router.delete('/', [])

module.exports = router