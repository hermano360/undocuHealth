var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ClinicSchema = new Schema({
  name: {
    type: String
  },
  link: {
    type: String
  },
  telephone: {
    type: String
  },
  lon_lat: {
    type: String
  },
  site_id: {
    type: String
  },
  language: {
    type: String
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Clinic', ClinicSchema);