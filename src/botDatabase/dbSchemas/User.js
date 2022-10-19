const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  _id: { type: String },
});

const User = model('User', userSchema);
module.exports = User;
