const express = require('express');
const router = express.Router();
const reservationController = require('../Controllers/reservationController');

router.post('/addreservation/:idClient',reservationController.addreser);
router.post('/creatHamum',reservationController.CreatHamam);

router.get('/getAll',reservationController.index);
// router.delete('/:id',reservationController.reservation_delete);

module.exports = router;