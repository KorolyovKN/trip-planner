const express = require('express');
const router = express.Router();
//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
//var DIR = './src/assets/images/uploads/';
var DIR = './dist/assets/images/uploads/';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({storage: storage}).single('photo');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// DATABASE SETUP
var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@ds145293.mlab.com:45293/my-test-database', { useMongoClient: true }); // connect to our database

var Bear     = require('../models/bear');
var Plan     = require('../models/Plan');
var Checklist     = require('../models/Checklist');

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

router.route('/plans')
  .post(function (req, res) {
    var plan = new Plan();
    plan.title = req.body.title;
    plan.date = req.body.date;
    plan.period = req.body.period;
    plan.planImage = req.body.planImage;

    plan.save(function (err) {
      if(err)
        res.send(err);
      res.json({message: 'Post created!'});
    });
  })
  .get(function (req, res) {
    Plan.find(function (err, plans) {
      if(err)
        res.send(err);
      res.json(plans);
    });
  });

router.route('/checklists')
  .post(function (req, res) {
    var checklist = new Checklist();
    checklist.planId = req.body.planId;
    checklist.title = req.body.title;
    checklist.listCategory = req.body.listCategory;
    checklist.items = req.body.items;

    checklist.save(function (err) {
      if(err)
        res.send(err);
      res.json({message: 'Checklist created!'});
    });
  });

router.route('/checklist/:plan_id')
  .get(function(req, res) {
    Checklist.find({'planId': req.params.plan_id}, function (err, list) {
      if (err)
        res.send(err);
      res.json(list);
    });
  });

router.route('/checklistUpdate/:checklist_id')
  .put(function(req, res){
    Checklist.findById(req.params.checklist_id, function (err, list) {
      if(err)
        res.send(err)

      list.items = req.body.items;

      list.save(function (err) {
        if(err)
          res.send(err);
        res.json({message: 'Checklist updated!'});
      });
    })
  });

router.route('/checklistDelete/:checklist_id')
  .delete(function (req, res) {
    Checklist.remove({_id: req.params.checklist_id}, function(err){
      if (err)
        res.send(err)
      res.json({message: 'Checklist depeted'});
    })
  });


//our file upload function.
router.post('/upload', function (req, res, next) {
  var path = '';
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      console.log(err);
      return res.status(422).send("an Error occured")
    }
    // No error occured.
    path = req.file.originalname;
    return res.send(path);
  });
})

//get single plan
router.route('/plan/:plan_id')
  .get(function(req, res) {
    Plan.findById(req.params.plan_id, function (err, plan) {
      if (err)
        res.send(err);
      res.json(plan);
    });
  });

module.exports = router;
