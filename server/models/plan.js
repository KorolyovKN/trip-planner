var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlanSchema   = new Schema({
  id: Number,
  title: String,
  date: String,
  period: String,
  img: String
});

module.exports = mongoose.model('Plan', PlanSchema);
