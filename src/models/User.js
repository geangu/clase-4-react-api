const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const UserSchema = Schema({
  username: { type: String },
  password: { type: String },
  created: { type: Date, default: Date.now },
});

const User = model('user', UserSchema);

module.exports = User;
