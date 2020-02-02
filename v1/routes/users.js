var express =require('express');
var router = express.Router();

var Auth = require('../controllers/authController');
router.post('/login',Auth.users_login);

module.exports = router;