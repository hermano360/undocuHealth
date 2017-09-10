var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RatingsSchema = new Schema({
  site_id: {
    type: String,
    required: true
  },
  comment: {
    type: String
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Ratings', RatingsSchema);