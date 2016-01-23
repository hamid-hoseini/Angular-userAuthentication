var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../public/javascripts/model');
var config = require('../public/javascripts/connect');
mongoose.connect(config.database, function (err, db) {
  if (err){
    console.log('error...');
    console.log(err);
  }
  else
    console.log('database is connected and agencyDB has been created...!')
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function (req, res) {
  console.log(req.body);

  (new User({
    password: req.body.password,
    username: req.body.username
  })).save(function (err,data) {
    if (err) {
      res.json(500, { success: false, message: 'Could not connect to the database.'});
    } else {
      res.json(200, { success: true, message: 'Successfully register data ... ' });
    }
  });
});
router.post('/signin', function(req, res) {

    // find the user
    User.findOne({
        password: req.body.password,
        username: req.body.username
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            res.json({
                success: true
            });
        }

    });
});
module.exports = router;
