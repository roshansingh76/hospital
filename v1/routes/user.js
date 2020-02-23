var express =require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var db = require('../config/database');
var Auth = require('../controllers/authController');
router.get('/getOtp',Auth.getOtp);
router.get('/verifyOtp',Auth.verifyOtp);
module.exports = router;