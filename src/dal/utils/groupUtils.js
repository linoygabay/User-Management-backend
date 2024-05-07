const Group = require('../../models/Group');

const updateGroupStatus = async (groupName, status) => {
    await Group.findOneAndUpdate({ groupName }, { status });

};
module.exports = { updateGroupStatus };
