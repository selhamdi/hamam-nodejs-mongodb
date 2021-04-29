const express = require('express');
const router = express.Router();
const clientController = require('../Controllers/clientController');

router.post('/signupclient',clientController.addClient);
router.post('/signinclient',clientController.signInclient);

module.exports = router;