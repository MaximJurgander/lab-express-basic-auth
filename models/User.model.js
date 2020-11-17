// User model here
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Need username']
  },
  password: {
    type: String,
    required: [true, 'Need password']
  }
});



module.exports = mongoose.model('User', userSchema);