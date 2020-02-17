var db = require('../config/database');
var async = require("async");

exports.getAllinfo = function(req, res) {
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
	
	

}

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