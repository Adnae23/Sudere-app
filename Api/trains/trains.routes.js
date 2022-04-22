const express = require('express');

const router = express.Router();

const { infoTrailers, updateTrailer, infoTrainById } = require('./controllers/trains.controllers');
const { checkShapingForTrailers, checkExistingUser } = require('./middlewares/trains.middlewares');

router.get('/', [infoTrailers]);
router.put('/', [checkShapingForTrailers, checkExistingUser, updateTrailer]);
router.get('/:id', [infoTrainById]);
module.exports = router;
