var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');
let config = require('../config/config');
let middleware = require('../middleware/authmiddleware');

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log(req.body)
	var username = req.body.username;
    var password = req.body.password; 
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
	        res.json({
	          	success: true,
	          	message: 'Authentication successful!',
	          	token: token
	        });
      	} else {
        	res.send(403).json({
          		success: false,
          		message: 'Incorrect username or password'
        	});
      	}
    } else {
      	res.send(400).json({
        	success: false,
        	message: 'Authentication failed! Please check the request'
      	});
    }
  	res.send(200).json({
          		success: true,
          		message: 'successful'
        	});
});

module.exports = router;
