var mongoose = require('mongoose');
const request = require('request');
var Clinic = mongoose.model('Clinic');
var Ratings = mongoose.model('Ratings');


// Clinic data to populate clinic list for GET
exports.filter = function(req, res) {
  // 211 data url
  var url = 'https://api.211la.org/search/v1/resource/site?';

  // filter keywords for query
  // var keyword = req.???;
  var keyword = 'health';
  url += 'keyword=' + keyword;
  // var location = req.???;
  // url += '&location=' + location;
  // var radius = req.???;
  // url += '&radius=' + radius;
  // var lang = req.???;
  // var lang = "Spanish";
  // url += '&filters[Language][]=' + lang;

  // end of url parameter - keys
  url += '&consumer_key=PnxoSggCjkZ6q46BJL2jmDgJophcUDks&consumer_secret=6FodWz8H2zJ2vY4Rqs4GsdN274gZ6xHL';
  console.log(url)

  // get JSON API data
  request(url, (err, res, body) => {
    if (!err && (res.statusCode === 200)) {
      const apiResponse = JSON.parse(body);
      // parse aned save into schema Clinic
      console.log(apiResponse.results[1][agency_id]);
      // 
      // Send data
      // res.status(200).send(list);
    } else {
      console.log("Got an error: ", err, ", status code: ", res.statusCode);
    }
  });

  // // Hardcode clinics
  // var clinic1 = new Clinic ({
  //   name: "blah",
  //   link: "www.example.com",
  //   telephone: "1234567890",
  //   lon_lat: "",
  //   site_id: "123",
  //   language: "Spanish"
  // });
};

// add ratings
exports.save_ratings = function(req, res) {

};