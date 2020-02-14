var express = require('express');
var router = express.Router();
var Auth = require('../controllers/authController');
router.post('/',Auth.auth_users_login);
module.exports = router;
