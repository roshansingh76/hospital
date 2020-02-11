// Install express server
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const db = require('./config/database');
const users = require('./routes/users');

<<<<<<< HEAD
// Initialize express app
const app = express();

=======
//Ankur code
var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
>>>>>>> 048dcb27d3d77f5568841fc69fb05081e582a1a7
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