const express = require('express');

const router = express.Router();

const { infoTrailers, updateTrailer, infoTrainById } = require('./controllers/trains.controllers');
const {
  checkBody, checkShapingForTrailers, checkExistingUser, checkCookie, verifyToken,
} = require('./middlewares/trains.middlewares');

router.get('/', [infoTrailers]);
router.put('/', [checkCookie, verifyToken, checkBody, checkShapingForTrailers, checkExistingUser, updateTrailer]);
router.get('/:id', [infoTrainById]);
module.exports = router;
