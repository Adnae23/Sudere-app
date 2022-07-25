/* eslint-disable max-len */
// eslint-disable-next-line camelcase
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const jwt_decode = require('jwt-decode');

const maxAge = 60000;
const minAge = 1;

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

// Hashage du mot de passe
const hashPassword = (plainPassword) => argon2.hash(plainPassword, hashingOptions);

// Vérification du mot de passe
const verifyPassword = (plainPassword, hashedPassword) => argon2.verify(hashedPassword, plainPassword, hashingOptions);

// Calcul du token
const calculateToken = (userId, userFirstname, userLastname, userEmail, userCenter, userProfile) => jwt.sign({
  cp: userId, firstname: userFirstname, lastname: userLastname, email: userEmail, center: userCenter, profile: userProfile,
}, process.env.PRIVATE_KEY, { expiresIn: maxAge });

// Décode le token
const decodeToken = (token) => jwt_decode(token);

const expireToken = () => jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY, { expiresIn: minAge });

module.exports = {

  hashPassword,
  verifyPassword,
  calculateToken,
  decodeToken,
  expireToken,
};
