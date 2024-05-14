const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'blocked'],
    index: true
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;