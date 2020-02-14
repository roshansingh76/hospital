var db = require('../config/database');
var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');
let config = require('../config/config');
let middleware = require('../middleware/authmiddleware');
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
	let result_from_qr = new array(); 
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