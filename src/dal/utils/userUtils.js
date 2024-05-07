const User = require('../../models/User');

const findUserById = async (userId) => {
    return await User.findById(userId);
};

const updateUserGroup = async (user, newGroupId) => {
    user.group = newGroupId;
    await user.save();
};


module.exports = { findUserById, updateUserGroup };
