var express =require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var db = require('../config/database');
var User = require('../controllers/userController');
router.get('/getOtp',User.getOtp);

module.exports = router;