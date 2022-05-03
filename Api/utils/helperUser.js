const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const maxAge = 60000;

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => argon2.hash(plainPassword, hashingOptions);

const verifyPassword = (plainPassword, hashedPassword) => argon2.verify(hashedPassword, plainPassword, hashingOptions);

const calculateToken = (userId, userAccess) => jwt.sign({ cp: userId, access: userAccess }, process.env.PRIVATE_KEY, { expiresIn: maxAge });

module.exports = {

  hashPassword,
  verifyPassword,
  calculateToken,
};
