const UserDAL = require('../dal/users');
const UserGroupDal = require('../dal/userGroup')
const handleRequest = require('../utils/requestHandler');

const getAllUsers = async (req) => {
    const { limit, offset } = req.query;
    return await UserDAL.getAllUsers({ limit, offset });
};

const filterUsersByName = async (req) => {
    const { name } = req.query;
    return await UserDAL.filterUsers({ name });
};

const filterUsersByEmail = async (req) => {
    const { email } = req.query;
    return await UserDAL.filterUsers({ email });
};

const removeUserFromGroup = async (req) => {
    const { userId } = req.params;
    await UserGroupDal.removeUserFromGroup(userId);

    return { message: 'User removed from group successfully' };
}
const updateUsersStatus = async (req) => {
    const { users } = req.body;
    await UserDAL.updateUsersStatus(users);
    
    return { message: 'Users statuses updated successfully' };
};

module.exports = {
    getAllUsers: handleRequest(getAllUsers),
    filterUsersByName: handleRequest(filterUsersByName),
    filterUsersByEmail: handleRequest(filterUsersByEmail),
    updateUsersStatus: handleRequest(updateUsersStatus),
    removeUserFromGroup: handleRequest(removeUserFromGroup)
};
