const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  refresh_token: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: 'user',
  },
  isactive: {
    type: Boolean,
    default: true,
  }
});

//Export the model
module.exports = mongoose.model('User', userSchema);