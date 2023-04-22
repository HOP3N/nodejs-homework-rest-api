const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts');
const { auth } = require('../middlewares/auth');

router.get('/signup', auth, contactController.register);
router.get('/login', userController.login);
router.get('/logout', auth, userController.logout);
router.get('/current', auth, userController.current);

module.exports = router;
