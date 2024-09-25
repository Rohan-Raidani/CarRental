const express = require('express')

const router = express.Router()
const admin_controller = require('../controllers/admin_controller')
const car_controller = require('../controllers/car_controller')
const driver_controller = require('../controllers/driver_controller')
const request_controller = require('../controllers/request_controller')



console.log("admin router loaded");
// router.get('/',admin_controller.admin)
router.get('/car',car_controller.getCar)
router.get('/driver',driver_controller.getDriver)
// router.get('/request',request_controller.request)


// router.get('/',admin_controller.admin)
router.post('/car',car_controller.addCar)
router.post('/driver',driver_controller.addDriver)
// router.get('/request',request_controller.request)


router.delete('/car/:id',car_controller.deleteCar)
router.delete('/driver/:id',driver_controller.deleteDriver)

module.exports = router;
