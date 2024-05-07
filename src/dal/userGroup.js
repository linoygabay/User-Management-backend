const User = require('../models/User');
const Group = require('../models/Group');

const removeUserFromGroup = async (userId) => {
    try {
        const group = await getUserGroup(userId);
        if (!group) return;

        await updateUserGroup(userId, { group: "" });

        await updateGroupStatusIfEmpty(group);
    } catch (error) {
        console.error(error);
    }
};

const getUserGroup = async (userId) => {
    const { group } = await User.findById(userId);
    return group;
};

const updateUserGroup = async (userId, updateData) => {
    await User.findByIdAndUpdate(userId, updateData);
};

const updateGroupStatusIfEmpty = async (groupName) => {
    const remainingUsersInGroup = await User.find({ group: groupName });

    if (remainingUsersInGroup.length === 0) {
        await Group.findOneAndUpdate({ groupName }, { status: "empty" });
    }
};

module.exports = { removeUserFromGroup };