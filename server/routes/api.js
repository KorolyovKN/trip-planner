const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// DATABASE SETUP
var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@ds145293.mlab.com:45293/my-test-database'); // connect to our database

var Bear     = require('../models/bear');

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

router.get('/bears', function (req, res) {
  Bear.find(function (err, bears) {
    if(err)
      res.send(err);
    res.json(bears);
  })
})

module.exports = router;
