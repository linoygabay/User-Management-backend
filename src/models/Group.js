const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupName: String,
  status: {
    type: String,
    enum: ['empty', 'notEmpty'],
  },
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
