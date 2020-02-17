var express =require('express');
var router = express.Router();

var Astro = require('../controllers/astroController');
router.get('/getAllinfo',Astro.getAllinfo);
router.get('/serviceInfo',Astro.serviceInfo);
router.get('/getCountry',Astro.getCountry);
router.post('/createAstro',Astro.createAstro);
module.exports = router;