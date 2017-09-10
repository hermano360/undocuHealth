var express = require('express');
var bodyParser = require('body-parser');
var postman = require('postman');
var Clinic = require('./api/models/clinic');
var Ratings = require('./api/models/ratings');
var controllers = require('./api/controllers/clinicController');

var app = express();
const PORT = process.env.PORT || 3000;


// DB set up
var mongoose = require('mongoose');
var mongoDB = 'mongodb://dbuser:dbpassword@ds133094.mlab.com:33094/healthymented';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.listen(PORT,function(){
  console.log('Express server is up on port ' + PORT);
});

app.post('/all_tasks', controllers.filter);