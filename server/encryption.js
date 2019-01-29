const settings = require('./settings');

const crypto = require('crypto');
const salt = process.env.ENCRYPTION_SALT || settings.login.encryptionSalt;
const algorithm = 'aes-256-ctr';

function encrypt(text) {
  const cipher = crypto.createCipher(algorithm, salt);
  let crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text) {
  const decipher = crypto.createDecipher(algorithm, salt);
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

module.exports = {
  encrypt,
  decrypt
};
