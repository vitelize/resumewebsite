var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'public/index.html'));

});
router.get('/cv/fr', function (req, res) {
	console.log(__dirname);

	      res.sendFile(path.join(__dirname,'/../public/download/Florian_Cavallo.pdf'));
})
router.get('/cv/en', function (req, res) {
	console.log(__dirname);

	     res.sendFile(path.join(__dirname,'/../public/download/Florian_Cavallo_English.pdf'));
})
module.exports = router;
