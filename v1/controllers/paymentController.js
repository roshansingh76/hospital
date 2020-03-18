var config = require('../config/config');
var db = require('../config/database');
var async = require("async");
var jsSHA = require("jssha");
var OpenTok = require('opentok'),
    opentok = new OpenTok(config.opentalkapikey, config.opentalksecretkey);
let jwt 		= require('jsonwebtoken');
let middleware 	= require('../middleware/authmiddleware');


exports.generateOpentalktoken = function (req, res) {
		if (!req.query.token) {
			res.status(401).json({
				success: false,
				message:'Token fields missing'
			});
		}else{
			opentok.createSession(function(err, session) {
				if (err) throw err;
				let sessionId=session.sessionId;
				let token = opentok.generateToken(sessionId);

				
				res.status(200).json({
					success: true,
					token:token,
					
				});		
       
				
			});	
			
		}
 
	
}

exports.payUMoneyPayment = function (req, res) {
  if (!req.body.txnid || !req.body.amount || !req.body.productinfo   
       || !req.body.firstname || !req.body.email) {
			res.status(401).json({
				success: false,
				message:'Mandatory fields missing'
			});
   } else {
         var pd = req.body;
         var hashString = config.merchantKey // Merchant Key 
                  + '|' + pd.txnid 
                  + '|' + pd.amount + '|' + pd.productinfo + '|'          
                  + pd.firstname + '|' + pd.email + '|' 
                  + '||||||||||' 
                  + config.merchantShalt // Your salt value
         var sha = new jsSHA('SHA-512', "TEXT");
         sha.update(hashString)
         var hash = sha.getHash("HEX");
		 res.status(200).json({
				success: true,
				hash:hash,
				
			});		
       
   }
}
 
 
exports.payUMoneyPaymentstatus=function(req,res){
	let token =req.body.token;
	let netamount=req.body.net_amount_debit;
    if (token) {
		jwt.verify(token,config.secret, (err, decoded) => {
		  if (err) {
			 res.status(401).json({
				success: false,
				message:err,
				
			});		
			
		  } else {
			  let id=decoded.id;
			  var sql = "SELECT * FROM `users` WHERE id = '"+id+"' limit 0,1";
		    	db.query(sql, function (err, checkuser){
					if(err) throw err;
					if(checkuser.length > 0){
					 let wallet=parseInt(netamount)+parseInt(checkuser[0].wallet);
					  var sql1 = "update  `users` set wallet='"+wallet+"' WHERE id = '"+id+"'";
						db.query(sql1, function (err, checkuser1){
							if(err) throw err;
							res.status(200).json({
								success: true,
								wallet:checkuser[0].wallet,

							});		
						});
						
  					}
				});
			  
		  }
		});
	  } else {
		 res.status(401).json({
				success: false,
				message:'Auth token is not supplied',
				
			});		
	  }
	
}