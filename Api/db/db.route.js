const express = require('express');
const { updateDatabase } = require('./controllers/db.controllers');
const {
  checkFile, storeFile, sheetName, compareData,
} = require('./middlewares/db.middlewares');

const router = express.Router();

router.post('/', [checkFile, storeFile, sheetName, compareData, updateDatabase]);

module.exports = router;
