const isProd = process.env.NODE_ENV === 'production';
let settings;
if (isProd) {
  settings = require('./settings.prod');
} else {
  settings = require('./settings');
}

module.exports = settings;