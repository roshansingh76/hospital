var db = require('../config/database');
exports.users_index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.users_index = function(req, res) {
    console.log('a');
};

exports.users_login = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
   if (username && password) {
	   sql="SELECT * FROM users WHERE username='"+username+"' and password='"+password+"'";
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