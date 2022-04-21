const express = require('express');
const {
  createUser, listUsers, deleteUser, updateUser, updateUserPassword,
} = require('./controllers/users.controllers');
const {
  checkExistingUser, checkNotExistingUser, checkShaping, hash, checkShapingForUpdate, checkShapingForPassword,
} = require('./middlewares/users.middlewares');

const router = express.Router();

router.post('/', [checkNotExistingUser, checkShaping, hash, createUser]);
router.get('/', [listUsers]);
router.put('/', [checkShapingForUpdate, updateUser]);
router.put('/updatePW', [checkShapingForPassword, hash, updateUserPassword]);
router.delete('/', [checkExistingUser, deleteUser]);

module.exports = router;
