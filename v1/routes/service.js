var express =require('express');
var router = express.Router();
var db = require('../config/database');
var Service = require('../controllers/serviceController');

//router.get('/geVastu',Service.geVastu);
router.get('/geVastu',Service.geVastu);
router.get('/getMuhuruat',Service.getMuhuruat);
router.get('/getHoroscopes',Service.getHoroscopes);
module.exports = router;