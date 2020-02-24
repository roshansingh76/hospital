var db 			= require('../config/database');
var config 		= require('../config/config');
var express 	= require('express');
var router 		= express.Router();
let jwt 		= require('jsonwebtoken');
let middleware 	= require('../middleware/authmiddleware');
const SendOtp 	= require('sendotp');
const sendOtp 	= new SendOtp(config.smsGatewayKey);
const { check, validationResult } = require('express-validator');

exports.users_index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.users_index = function(req, res) {
    console.log('a');
};

exports.users_login = function(req, res) {
	console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
   if (username && password) {
	    		
	   	var sql="SELECT * FROM cms_users WHERE username='"+username+"' and password='"+password+"'";
		db.query(sql,function(error, results, fields) {
			 if(error){
				res.status(500)
				.json({
					error: 'Internal error please try again'
				});
			 }else if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				 res.status(200).json({
					success: true,
				});
			} else {
				 return res.status(404).json({error: "Invalid username and password" });
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
};
exports.auth_users_login = function(req, res) {
var username = req.body.username;
    var password = req.body.password; 
	//console.log(username+"==="+password);
    let mockedUsername = 'admin';
    let mockedPassword = '123456'; 
	if (username && password) {
      	if (username === mockedUsername && password === mockedPassword) {
        	let token = jwt.sign({username: username},
			          		config.secret,
			          		{ expiresIn: '24h' // expires in 24 hours
			          		}
        				);        	
    	// return the JWT token for the future API calls
	         res.status(200).json({
	          	success: true,
	          	message: 'Authentication successful!',
	          	token: token
	        });
      	} else {
        	 res.status(400).json({
          		success: false,
          		message: 'Incorrect username or password'
        	});
      	}
    } else {
       res.status(400).json({
        	success: false,
        	message: 'Authentication failed! Please check the request'
      	});
    }
};
exports.getOtp = function(req, res) {
	console.log('get Otp function');
	console.log(req.query.phone);
	var phone = req.query.phone;
	try{
		if(phone.length==10){
			sendOtp.send(phone, "RGYANO", function (error, data) {
  				console.log(data);
	  			if(error){
	  				res.status(401).json({
						success: false,
						message:"Erro While Sending Otp"
					});
	  			}else{
		  			res.status(200).json({
						success: true,
						message:"Otp Send Successfully"
					});
	  			}
			});
		}else{
			res.status(401).json({
				success: false,
				message:'1Phone No should be numeric and length should be 10.'
			});	
		}
    	
	} catch(error){
	    res.status(401).json({
			success: false,
			message:'Phone No should be numeric and length should be 10.'
		});
	}	
}
exports.verifyOtp = function(req, res) {
	var phone 	= 	req.query.phone;
    var otp 	= 	req.query.otp; 
	console.log("verify Otp");
	console.log(phone+"---"+otp);
	sendOtp.verify(phone, otp, function (error, data) {
  		console.log(data); // data object with keys 'message' and 'type'
  		if(data.type == 'success'){
  			var sql = "SELECT id FROM `users` WHERE phone = '"+phone+"' limit 0,1";
  			console.log(sql);
  			db.query(sql, function (err, checkuser){
  				var user_id = '';
  				if(checkuser.length > 0){
  					user_id = checkuser.id;
  					let token = jwt.sign(
										{id: user_id},
					          			config.secret,
					          			{ expiresIn: '24h'}
		        					); 
					res.status(200).json({
			          	success: true,
			          	message: 'Authentication successful!',
			          	token: token
        			});
			        console.log('OTP verified successfully')
  				}else{
  					var sql1 = "INSERT into users(phone,cb_roles_id) VALUES ('"+phone+"',3)";
  					console.log(sql1);
  					db.query(sql1, function (err, result){						
						if(err){
							res.status(401).json({
								success: false,
								message:'Error While Generating Token for the user'
							});
						}else{
							user_id = result.insertId;
							let token = jwt.sign(
										{id: user_id},
					          			config.secret,
					          			{ expiresIn: '24h'}
		        					); 
							res.status(200).json({
					          	success: true,
					          	message: 'Authentication successful!',
					          	token: token
		        			});
					        console.log('OTP verified successfully')									
							}
					});
				}
  			});
  		}else{
  			res.status(401).json({
				success: false,
				message:'Error While Generating Otp for the user'
			});		
  		}
	}); 
}
