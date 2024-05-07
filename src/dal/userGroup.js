const { findUserById, updateUserGroup } = require('./utils/userUtils');
const { updateGroupStatus } = require('./utils/groupUtils');
const { filterUsers } = require('./users')

const removeUserFromGroup = async (userId) => {
    try {
        const user = await findUserById(userId);

        if (!user || !user.group) {
            return
        }
        const group = user.group;

        await updateUserGroup(user, "");

        const remainingUsers = await filterUsers({ group });
        if (remainingUsers.length === 0) {
            await updateGroupStatus(group, 'Empty');
        }
    } catch (err) {
        console.log(err)
    }
};

module.exports = { removeUserFromGroup };
