var express =require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var db = require('../config/database');
var Astro = require('../controllers/astroController');
router.get('/getAllinfo',Astro.getAllinfo);
router.get('/serviceInfo',Astro.serviceInfo);
router.get('/getCountry',Astro.getCountry);
router.get('/getAstrologerlist',Astro.getAstrologerlist);
router.get('/deleteAstro',Astro.deleteAstro);
router.post('/createAstro',Astro.createAstro);


router.get('/getState',Astro.getState);
router.get('/getCity',Astro.getCity);

module.exports = router;