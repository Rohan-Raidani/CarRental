const express = require('express')

const router = express.Router()
const home_controller = require('../controllers/home_controller')
const about_controller = require('../controllers/about_controller')
const contact_controller = require('../controllers/contact_controller')
const facility_controller = require('../controllers/facility_controller')

console.log("index router loaded");

// router.get('/' ,home_controller.home)
router.get('/about' , about_controller.about )
router.get('/contact' , contact_controller.contact)
router.get('/facilities' ,facility_controller.facility)


router.post('/' ,home_controller.addhireRequest)
router.post('/rent' ,home_controller.addRentRequest)

router.get('/rent' ,home_controller.getcarRequests)
router.get('/' ,home_controller.getJobRequests)

router.delete('/rent/:id', home_controller.deleteCarRequest);
router.delete('/:id', home_controller.deleteJobRequest);


module.exports = router;
