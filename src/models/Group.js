const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    groupName: String,
    status: {
        type: String,
    }
});

module.exports = mongoose.model('Group', groupSchema);
