/* eslint-disable max-len */
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
// eslint-disable-next-line camelcase
const jwt_decode = require('jwt-decode');

const maxAge = 60000;
const minAge = 1;

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

// ******************************* hashage du MDP
const hashPassword = (plainPassword) => argon2.hash(plainPassword, hashingOptions);

// ******************************* verification du MDP
const verifyPassword = (plainPassword, hashedPassword) => argon2.verify(hashedPassword, plainPassword, hashingOptions);

// ******************************* calcul du token
const calculateToken = (userId, userFirstname, userLastname, userEmail, userCenter, userProfile) => jwt.sign({
  cp: userId, firstname: userFirstname, lastname: userLastname, email: userEmail, center: userCenter, profile: userProfile,
}, process.env.PRIVATE_KEY, { expiresIn: maxAge });

// ******************************* décode le token
const decodeToken = (token) => jwt_decode(token);

const expireToken = () => jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY, { expiresIn: minAge });

module.exports = {

  hashPassword,
  verifyPassword,
  calculateToken,
  decodeToken,
  expireToken,
};
