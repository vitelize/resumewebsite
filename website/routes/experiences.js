var express = require('express');
var experiencesController = require('../controllers/experienceController')
var router = express.Router();
var cors = require('cors')

var corsOptions = {
   origin: 'http://localhost:8070/',
  //origin: window.location.hostname,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


router.get('/', cors(corsOptions), experiencesController.getexperiences)
router.get('/:id',cors(corsOptions),  experiencesController.getexperience)
router.post('', experiencesController.createexperience)
router.put('/:id', experiencesController.replaceexperience)
router.patch('/:id', experiencesController.updateexperience)
router.delete('/:id',experiencesController.removeexperience)

module.exports = router;
