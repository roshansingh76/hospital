// Install express server
const express = require('express');
const path = require('path');
var cors = require('cors')
var bodyParser = require('body-parser');
const db = require('./config/database');
let middleware = require('./middleware/authmiddleware');
const astro = require('./routes/astro');
const index = require('./routes/index');
const user = require('./routes/user');
const service = require('./routes/service');

//Ankur code
var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


// Add API Routes 
app.use('/api/login', index);
app.use('/api/astro',astro);
app.use('/api/user',user);
app.use('/api/service',service);




const port = process.env.PORT || 3000;

// Start the app
app.listen(port, () => {
  console.log('App started on port: ' + port);
});

module.exports = app;