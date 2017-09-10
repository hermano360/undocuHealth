var express = require('express');
var bodyParser = require('body-parser');
var postman = require('postman');

//Create out app

var app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.listen(PORT,function(){
  console.log('Express server is up on port ' + PORT);
});
