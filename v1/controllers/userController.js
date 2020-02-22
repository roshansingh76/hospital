var config = require('../config/config');
var db = require('../config/database');
var async = require("async");
const SendOtp = require('sendotp');
const sendOtp = new SendOtp(config.smsGatewayKey);

exports.getOtp = async function(req, res) {
	console.log('get Otp function');
	console.log(req.query.phone);
	try{
    	sendOtp.send(req.query.phone, "RGYANO", function (error, data) {
  			console.log(data);
		});
		res.status(200).json({
			success: true,
			phone:req.body.phone
		});
	} catch(error){
	    res.status(200).json({
			success: false,
			phone:req.body.phone
		});
	}	
	
}