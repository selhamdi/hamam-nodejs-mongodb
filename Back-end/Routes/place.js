const express = require('express');
const router = express.Router();
const placeController = require('../Controllers/placeController');

router.get('/getall',placeController.getPlaces);
router.post('/addpl',placeController.addplace);

module.exports = router;