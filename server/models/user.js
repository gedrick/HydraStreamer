const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: false
  },
  profile: {
    type: Object,
    required: true,
    unique: false
  },
  access_token: {
    type: String,
    required: true,
    unique: false
  },
  refresh_token: {
    type: String,
    required: true,
    unique: false
  }
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', userSchema);
