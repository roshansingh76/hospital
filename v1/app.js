// Install express server
const express = require('express');
const path = require('path');
var cors = require('cors')
var bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');



const db = require('./config/database');
let middleware = require('./middleware/authmiddleware');
const astro = require('./routes/astro');
const index = require('./routes/index');
const user = require('./routes/user');
const service = require('./routes/service');
var key = fs.readFileSync('./certs/apache.key');
var cert = fs.readFileSync('./certs/apache.crt');
var options = {
  key: key,
  cert: cert
};


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

app.use(express.static(path.join(__dirname, 'build')))

const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});
