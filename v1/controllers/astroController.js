var db = require('../config/database');
var async = require("async");
const { check, validationResult } = require('express-validator');
var moment = require("moment");
const multer = require("multer");
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
	let sql="select * from users where cb_roles_id=2 order by id DESC";
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
exports.createAstro= function(req, res) {
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
	
	console.log(flag);
	return false;
	var fname=req.body.fname;
	var lname=req.body.lname;
	var name=fname+" "+lname;
    var email=req.body.email;
    var mobile=req.body.mobile;
    var phone=req.body.phone;
    var website=req.body.website;
	var chatprice=req.body.chatprice;
	var callprice=req.body.callprice;
	var reportprice=req.body.reportprice;
	var address=req.body.address;
	var exp=req.body.exp;
	var countryx=req.body.countryx;
	var statex=req.body.statex;
	var cityx=req.body.cityx;
	var pincode=req.body.pincode;
	var about=req.body.about;
	var slug=name.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
	var sql = "INSERT into users(name, email,phone,mobile,chatprice,callprice,reportprice,exp,countryx,statex,cityx,slug,cb_roles_id) VALUES ('"+name+"', '"+email+"','"+mobile+"','"+phone+"','"+chatprice+"','"+callprice+"','"+reportprice+"','"+exp+"','"+countryx+"','"+statex+"','"+cityx+"','"+slug+"',2)";
	db.query(sql, function (err, result) {
	if (err) throw err;
		res.status(200).json({
			success: true,
			message:'Astrologer createrd successfully!'
		});
	});
	

}