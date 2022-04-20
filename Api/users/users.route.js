const express  = require('express')
const { createUser, listUsers, deleteUser } = require('./controllers/users.controllers')
const {checkExistingUser,checkNotExistingUser, checkShaping, hash } = require('./middlewares/users.middlewares')

const router = express.Router()

router.post('/', [checkNotExistingUser, checkShaping, hash, createUser])
router.get('/', [listUsers])
router.put('/', [])
router.put('/updatePW', [])
router.delete('/', [checkExistingUser, deleteUser])

module.exports = router