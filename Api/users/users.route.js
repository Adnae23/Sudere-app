/* eslint-disable max-len */
const express = require('express');
const {
  createUser, listUsers, deleteUser, updateUser, updateUserPassword, listCenters, listProfiles,
} = require('./controllers/users.controllers');
const {
  checkExistingUser, checkNotExistingUser, checkShaping, hash, checkShapingForUpdate, checkShapingForPassword, checkBodyForUpdate, checkBody, checkBodyForPassword, checkBodyId, checkCookie, checkProfile, verifyToken, checkRequestProfile,
} = require('./middlewares/users.middlewares');

const router = express.Router();

router.post('/', [checkCookie, checkProfile, verifyToken, checkBody, checkNotExistingUser, checkShaping, hash, createUser]);
router.get('/users-list', [checkCookie, checkProfile, verifyToken, listUsers]);
router.get('/centers-list', [checkCookie, checkProfile, verifyToken, listCenters]);
router.get('/profiles-list', [checkCookie, checkProfile, verifyToken, listProfiles]);
router.put('/', [checkCookie, checkProfile, verifyToken, checkBodyForUpdate, checkRequestProfile, checkShapingForUpdate, updateUser]);
router.put('/updatePassword', [checkBodyForPassword, checkShapingForPassword, hash, updateUserPassword]);
router.delete('/', [checkCookie, checkProfile, verifyToken, checkBodyId, checkExistingUser, deleteUser]);

module.exports = router;
