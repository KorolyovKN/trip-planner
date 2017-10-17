var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ChecklistSchema   = new Schema({
  planId: String,
  title: String,
  listCategory: String,
  items: [{
    itemContent: String,
    itemChecked: String
  }]
});

module.exports = mongoose.model('Checklist', ChecklistSchema);
