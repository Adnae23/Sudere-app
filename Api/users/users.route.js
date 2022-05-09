/* eslint-disable max-len */
const express = require('express');
const {
  createUser, listUsers, deleteUser, updateUser, updateUserPassword,
} = require('./controllers/users.controllers');
const {
  checkExistingUser, checkNotExistingUser, checkShaping, hash, checkShapingForUpdate, checkShapingForPassword, checkBodyForUpdate, checkBody, checkBodyForPassword, checkBodyId,
} = require('./middlewares/users.middlewares');

const router = express.Router();

router.post('/', [checkBody, checkNotExistingUser, checkShaping, hash, createUser]);
router.get('/', [listUsers]);
router.put('/', [checkBodyForUpdate, checkShapingForUpdate, updateUser]);
router.put('/updatePassword', [checkBodyForPassword, checkShapingForPassword, hash, updateUserPassword]);
router.delete('/', [checkBodyId, checkExistingUser, deleteUser]);

module.exports = router;
