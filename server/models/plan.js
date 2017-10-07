var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlanSchema   = new Schema({
  title: String,
  date: {},
  period: String,
  planImage: String
});

module.exports = mongoose.model('Plan', PlanSchema);
