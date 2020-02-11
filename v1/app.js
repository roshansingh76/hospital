// Install express server
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const db = require('./config/database');
const users = require('./routes/users');
//Ankur code
var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// Add API Routes 
app.use('/api/users', users);




const port = process.env.PORT || 5000;

// Start the app
app.listen(port, () => {
  console.log('App started on port: ' + port);
});