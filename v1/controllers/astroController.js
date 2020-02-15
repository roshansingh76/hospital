var db = require('../config/database');

exports.getAllinfo = function(req, res) {
	
	var data=[];
	  var sql="select * from users";
		db.query(sql,function(error, results, fields) {
			 if(error){
				res.status(500)
				.json({
					error: 'Internal error please try again'
				});
			 }else if (results.length > 0) {
					data.push(results);
					db.query(sql,function(error, results, fields) {
						if (results.length > 0) {
							data.push(results);
						}
					});
			} else {
				 return res.status(404).json({error: "Invalid username and password" });
			}
				 res.status(200).json({
					success: true,
					data:data
				});
			
		});
		
}