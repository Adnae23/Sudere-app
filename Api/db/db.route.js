const express = require('express');
const { updateDatabase } = require('./controllers/db.controllers');
const {
  checkFile, storeFile, sheetName, compareData, checkCookie, verifyToken,
} = require('./middlewares/db.middlewares');

const router = express.Router();

router.post('/', [checkCookie, verifyToken, checkFile, storeFile, sheetName, compareData, updateDatabase]);

module.exports = router;
