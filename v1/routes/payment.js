var express =require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var db = require('../config/database');
var Payment = require('../controllers/paymentController');
router.post('/payUMoneyPayment',Payment.payUMoneyPayment);
router.post('/payUMoneyPaymentstatus',Payment.payUMoneyPaymentstatus);
router.get('/generateOpentalktoken',Payment.generateOpentalktoken);

module.exports = router;