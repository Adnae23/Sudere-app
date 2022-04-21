const express = require ('express')
const router = express.Router()

const {infoTrailers, modifyTrailers, infoTrainById} = require ('./controllers/trains.controllers')
const {verifyTrailers} = require ('./middlewares/trains.middlewares')


router.get('/', [infoTrailers])
router.put('/', [modifyTrailers, verifyTrailers])
router.get('/:id', [infoTrainById])
module.exports = router