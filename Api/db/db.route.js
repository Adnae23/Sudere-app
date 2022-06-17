const express = require('express');
const {
  updateDatabase, fetchCenters, fetchSeries, fetchLines,
} = require('./controllers/db.controllers');
const {
  checkFile, storeFile, sheetName, compareData, checkCookie, verifyToken,
} = require('./middlewares/db.middlewares');

const router = express.Router();

router.post('/', [checkCookie, verifyToken, checkFile, storeFile, sheetName, compareData, updateDatabase]);
router.get('/lines', [fetchLines]);
router.get('/centers', [fetchCenters]);
router.get('/series', [fetchSeries]);

module.exports = router;
