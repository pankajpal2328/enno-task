const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/sign-up', userController.register);
router.post('/sign-in', userController.login);

module.exports = router;
