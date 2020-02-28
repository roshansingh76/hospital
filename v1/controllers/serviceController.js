var db = require('../config/database');

exports.geVastu = function(req, res) {	
	let sql="SELECT * FROM `vastu`";
	db.query(sql,function(err,result){
		if(err){
			res.status(401).json({
				success: false,
				data:err,
				message:'Error in getting all Vastus!'
			});
		}else{
			res.status(200).json({
				success: true,
				data:result,
				message:'Successfully get all Vastus!'
			});		
		}
	})
}

exports.getMuhuruat = function(req, res) {	
	let sql="SELECT * FROM `muhurat`";
	db.query(sql,function(err,result){
		if(err){
			res.status(401).json({
				success: false,
				data:err,
				message:'Error in getting all Muhurat!'
			});
		}else{
			res.status(200).json({
				success: true,
				data:result,
				message:'Successfully get all Muhurat!'
			});		
		}
	})
}

exports.getHoroscopes = function(req, res) {	
	let sql="SELECT * FROM `weekly_horoscope`";
	db.query(sql,function(err,result){
		if(err){
			res.status(401).json({
				success: false,
				data:err,
				message:'Error in getting all Horoscope!'
			});
		}else{
			res.status(200).json({
				success: true,
				data:result,
				message:'Successfully get all Horoscope!'
			});		
		}
	})
}
exports.getHandKundalis = function(req, res) {	
	let sql="SELECT * FROM `hand_kundli`";
	db.query(sql,function(err,result){
		if(err){
			res.status(401).json({
				success: false,
				data:err,
				message:'Error in getting Hand Kundli!'
			});
		}else{
			res.status(200).json({
				success: true,
				data:result,
				message:'Successfully Get Hand Kundlis!'
			});		
		}
	})
}
exports.getPackages = function(req, res) {	
	let sql="SELECT * FROM `packages`";
	db.query(sql,function(err,result){
		if(err){
			res.status(401).json({
				success: false,
				data:err,
				message:'Error in getting packages!'
			});
		}else{
			let sql1="SELECT * FROM `packages` WHERE default_set = 1 ";
			db.query(sql1,function(err,defpackage){
				res.status(200).json({
					success: true,
					data:result,
					default:defpackage,
					message:'Successfully Get packages!'
				});
			});					
		}
	})
}

