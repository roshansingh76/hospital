var express =require('express');
var router = express.Router();

var Astro = require('../controllers/astroController');
router.get('/getAllinfo',Astro.getAllinfo);
module.exports = router;