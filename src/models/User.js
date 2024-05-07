const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    status: {
        type: String,
        enum: ['pending', 'active', 'blocked']
    },
    group: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);
