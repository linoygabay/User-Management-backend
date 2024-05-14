const User = require('../models/User');

const getAllUsers = async ({ limit = 10, offset = 0 }) => {
  try {
    const users = await User.find()
      .limit(parseInt(limit))
      .skip(parseInt(offset));
    return users;
  } catch (err) {
    console.log(err);
  }
};

const filterUsers = async (filterCriteria) => {
  try {
    const users = await User.find(filterCriteria);
    return users;
  } catch (err) {
    console.log(err);
  }
};

const updateUsersStatus = async (users) => {
  try {
    const bulkOps = users.map((user) => ({
      updateOne: {
        filter: { _id: user._id },
        update: { $set: { status: user.status } },
      },
    }));
    await User.bulkWrite(bulkOps);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllUsers, filterUsers, updateUsersStatus };
