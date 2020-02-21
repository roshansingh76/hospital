var config = require('../config/config');
var db = require('../config/database');
var async = require("async");
const { check, validationResult } = require('express-validator');
var moment = require("moment");
const multer = require("multer");
var crypto = require('crypto');
let flag=false;
exports.deleteAstro = function(req, res) {
	let id=req.query.id;
	if(id){
	let sql="delete from users where id="+id;
		db.query(sql,function(err,result){
			if(err) throw err;
			res.status(200).json({
				success: true,
				message:'Astrologer deleted successfully!'
			});	
		})
	}
}
exports.getAstrologerlist = function(req, res) {
	let sql="SELECT *,(SELECT GROUP_CONCAT(l.language_name) FROM `language` l WHERE l.id IN (SELECT ln.language_id FROM `astro_languages` ln WHERE  ln.user_id = u.id)) as language_name,(SELECT GROUP_CONCAT(e.expertise_name) FROM `expertise` e WHERE e.id IN (SELECT ue.expertise_id FROM `astro_expertise` ue WHERE  ue.user_id = u.id)) as expertise_name from users u where u.cb_roles_id=2 order by u.id DESC";
		db.query(sql,function(err,result){
			if(err) throw err;
			res.status(200).json({
				success: true,
				result:result
			});	
		})
}
exports.getAllinfo = function(req, res) {
	
	var sql1="SELECT * FROM countries";
	var sql2="SELECT * FROM expertise";
	var sql3="SELECT * FROM gender";
	var sql4="SELECT * FROM status";
	var sql5="SELECT * FROM language";
	db.query(sql1,(e1,countries)=>{
		db.query(sql2,(e2,expertise)=>{
			db.query(sql3,(e3,gender)=>{
				db.query(sql4,(e3,status)=>{
					db.query(sql5,(e3,language)=>{
						res.status(200).json({
								success		: true,
								countries 	: countries,
								gender      : gender,
								expertise   : expertise, 
								status      : status,
								language    : language,
						});	
					});	
				});	
			})
		})
	})		 
}
exports.getState=function(req,res){
		let id=req.query.id;
		if(id){
			let sql="select * from states where country_id="+id;
			db.query(sql,function(err,result){
				if(err) throw err;
				res.status(200).json({
					success		: true,
					state:result
				});	
			})

		}else{
			res.status(400).json({
				success		: false,
				message:'Server error please try again!'
			
			});	
		}
}

exports.getCity=function(req,res){
	let id=req.query.id;
	if(id){
		let sql="select * from cities where state_id="+id;
		db.query(sql,function(err,result){
			if(err) throw err;
			res.status(200).json({
				success		: true,
				city:result
			});	
		})

	}else{
		res.status(400).json({
			success		: false,
			message:'Server error please try again!'
		
		});	
	}
}
/*exports.getAllinfo = function(req, res) {
	var localdata={};
	var tasks=[
		function(callback) {
			db.query('select * from gender',function(err,doc) {
				localdata.gender=doc;
				callback();
			});
		},
		
		function(callback) {
			db.query('select * from status',function(err,doc) {
				localdata.status=doc;
				callback();
			});
		}						
	];
	async.parallel(tasks, function(err) {
		if (err) throw err;
			res.status(200).json({
			success: true,
			localdata:localdata
		});
	});
	
	

}*/

exports.serviceInfo = function(req, res) {
	var localdata={};
	var tasks=[
		function(callback) {
			db.query('select * from language',function(err,doc) {
				localdata.language=doc;
				callback();
			});
		},
		
		function(callback) {
			db.query('select * from expertise',function(err,doc) {
				localdata.expertise=doc;
				callback();
			});
		}						
	];
	async.parallel(tasks, function(err) {
		if (err) throw err;
			res.status(200).json({
			success: true,
			localdata:localdata
		});
	});
}

exports.getCountry = function(req, res) {
	var localdata={};
	var tasks=[
		function(callback) {
			db.query('select * from countries',function(err,doc) {
				localdata.countries=doc;
				callback();
			});
		},
		
						
	];
	async.parallel(tasks, function(err) {
		if (err) throw err;
			res.status(200).json({
			success: true,
			localdata:localdata
		});
	});
	
	

}
var storage = multer.diskStorage({
	destination: function(req, file, callback) {
	  callback(null, "./../../src/asset/uploads"); // set the destination
	},
	filename: function(req, file, callback) {
	  callback(null, Date.now() + ".jpg"); // set the file name and extension
	}
  });
  var upload = multer({ storage: storage });
 setValue= function(value){
	
	flag=value;

 }
exports.createUser= function(req, res) {
	
	var data = {
				"fname":"jghjb",
				"lname":"gjhg",
				"email":"ghfhgfhg@hgfh.com",
				"phone":"686868686",
				"mobile":"757775766",
				"website":"ddd.com",
				"chatprice":"12",
				"callprice":"4",
				"reportprice":"2",
				"address":"jvjj",
				"exp":"3",
				"countryx":"",
				"statex":"",
				"cityx":"",
				"pincode":"112222",
				"expertisex":[1,2,7],
				"languagex":[2,3],
				"about":"jhfghj",
				"password":"123456",
				"bankname":"nghj",
				"anumber":"558555655656",
				"ifsc":"jf75755757",
				"image":"/static/media/avatar-01.b3a5c318.jpg",
				"statusx":"",
				"genderx":""
			}
	req.body = data;		
	console.log(req.body);
	
	 /*
	const errors = validationResult(req)
	if (!req.body.fname) {
		
	  return res.status(401).json({ 
    		success: 'validation',
			message:'First name is required'
		 })
	}
	if (!req.body.lname) {
		
	  return res.status(401).json({ 
    		success: 'validation',
			message:'Last name is required'
		 })
	}
	
	if (req.body.email) {
		let sql="select * from users where email='"+req.body.email+"'";
		db.query(sql,function(err,rows) {
				if(rows.length>0){
					   flag=true;
					   setValue(flag);
				}	
		});
	
	}
	//*/
	//console.log(flag);
	//return false;

	var fname 		=	req.body.fname;
	var lname 		=	req.body.lname;
	var name 		=	fname+" "+lname;
    var email		=	req.body.email;
    var mobile		=	req.body.mobile;
    var phone		=	req.body.phone;
    var website		=	req.body.website;
	var chatprice	=	req.body.chatprice;
	var callprice	=	req.body.callprice;
	var reportprice =	req.body.reportprice;
	var address		=	req.body.address;
	var exp			=	req.body.exp;
	var countryx	=	req.body.countryx;
	var statex		=	req.body.statex;
	var cityx		=	req.body.cityx;
	var pincode		=	req.body.pincode;
	var about		=	req.body.about;
	var expertisex	=	req.body.expertisex;	
	var languagex	=	req.body.languagex;	
	var bankname 	=	req.body.bankname;
	var ifsc 		=	req.body.ifsc;
	var anumber 	=	req.body.anumber;
	
	var algorithm 	= 	'aes256'; // algorithm supported by OpenSSL
	var key 		= 	config.salt;
	var password	= 	req.body.password;
	var cipher 		= 	crypto.createCipher(algorithm, key);  
	var encrypted 	= 	cipher.update(req.body.password, 'utf8', 'hex') + cipher.final('hex');

	var slug=name.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
	var sql = "INSERT into users(name, email,phone,mobile,countryx,statex,cityx,password,slug,cb_roles_id) VALUES ('"+name+"', '"+email+"','"+phone+"','"+mobile+"','"+countryx+"','"+statex+"','"+cityx+"','"+encrypted+"','"+slug+"',2)";		
	
	var tasks=[
		function(callback) {
			db.query(sql, function (err, result) {				
				callback(null, result.insertId);
			});
		},
		function(user_id,callback) {
			let acc_sql = "INSERT into astro_account_info(user_id,bank_name,ifsc,account_number,created_at) VALUES ('"+user_id+"', '"+bankname+"', '"+ifsc+"', '"+anumber+"',NOW())";

			db.query(acc_sql, function (err, result) {				
				callback(null, user_id);
			});
		},		 
		function(user_id, callback) {
			for(let i =0;i<expertisex.length;i++){
				let expsql  = "INSERT into astro_expertise(user_id,expertise_id,created_at) VALUES ('"+user_id+"','"+expertisex[i]+"',NOW())";
				db.query(expsql, function (err, result) {								
				})
			}
		    callback(null, user_id);
		},
		function(user_id, callback) {
			for(let i =0;i<languagex.length;i++){
				let expsql  = "INSERT into astro_languages(user_id,language_id,created_at) VALUES ('"+user_id+"','"+expertisex[i]+"',NOW())";
				db.query(expsql, function (err, result) {								
				})
			}
		    callback(null, user_id);
		},
		function(user_id,callback) {
			let price_sql = "INSERT into astro_price_info(user_id,chat_price,call_price,report_price,created_at) VALUES ('"+user_id+"', '"+chatprice+"', '"+callprice+"', '"+reportprice+"',NOW())";
			db.query(price_sql, function (err, result) {				
				callback(null, user_id);
			});
		},
		function(user_id,callback) {
			let price_sql = "INSERT into astro_profile_info(user_id,experience,about,created_at) VALUES ('"+user_id+"', '"+exp+"', '"+about+"',NOW())";
			db.query(price_sql, function (err, result) {				
				callback(null, user_id);
			});
		},								
	];
	async.waterfall(tasks, function(err) {
		if (err) throw err;
			res.status(200).json({
			success: true,			
		});
	});
	

	/*
	db.query(sql, function (err, result) {
	if (err) throw err;
		if(result){
			for(let i =0;i<expertisex.length;i++){
				let expsql  = "INSERT into user_expertise(user_id,expertise_id) VALUES ('"+result.insertId+"','"+expertisex[i]+"')";
				db.query(expsql, function (err, result) {
					console.log(result.insertId);
					res.status(200).json({
						success: true,
						data:req.body,
						message:'Astrologer createrd successfully!'
					});
				})
			}
			
		}
		
	});
	*/

}

/*
var crypto = require('crypto');
var assert = require('assert');

var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
var key = 'password';
var text = 'I love kittens';

var cipher = crypto.createCipher(algorithm, key);  
var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
var decipher = crypto.createDecipher(algorithm, key);
var decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');

assert.equal(decrypted, text);
*/