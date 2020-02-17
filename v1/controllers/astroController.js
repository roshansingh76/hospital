var db = require('../config/database');
var async = require("async");
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

exports.createAstro= function(req, res) {
	res.status(200).json({
		success: true,
		message:'Astrologer createrd successfully!'
	});

}