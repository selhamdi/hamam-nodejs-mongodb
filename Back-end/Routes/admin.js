const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');

router.post('/',adminController.addAdmin);
router.post('/login',adminController.signInAdmin);

module.exports = router;