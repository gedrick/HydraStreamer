const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  version: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('App', appSchema);