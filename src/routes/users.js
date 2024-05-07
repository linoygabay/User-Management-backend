const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.getAllUsers);
router.get('/filterByName', UserController.filterUsersByName);
router.get('/filterByEmail', UserController.filterUsersByEmail);
router.put('/updateStatus', UserController.updateUsersStatus);
router.put('/:userId/removeFromGroup', UserController.removeUserFromGroup);


module.exports = router;
