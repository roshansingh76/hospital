var express =require('express');
var router = express.Router();
var db = require('../config/database');
var Service = require('../controllers/serviceController');

//router.get('/geVastu',Service.geVastu);
router.get('/geVastu',Service.geVastu);
router.get('/getMuhuruat',Service.getMuhuruat);
router.get('/getHoroscopes',Service.getHoroscopes);
router.get('/getHandKundalis',Service.getHandKundalis);
router.get('/getPackages',Service.getPackages);
router.get('/getTopAstrologers',Service.getTopAstrologers);
module.exports = router;