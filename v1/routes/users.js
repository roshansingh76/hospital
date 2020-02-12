var express =require('express');
var router = express.Router();

var Auth = require('../controllers/authController');

router.get('/',function(req, res, next) {
  res.send('index')
});
router.post('/getUsers',Auth.users_login);
module.exports = router;