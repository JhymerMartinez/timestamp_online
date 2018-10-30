var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET users listing. */
router.get('/:timestamp', function(req, res, next) {
  var timestamp = parseInt(req.params.timestamp);
  var date = moment(timestamp);
  var isValid = date.isValid();

  if (isValid) {
    res.render('timestamp', {
      timestamp: req.params.timestamp,
      date: date.format('DD/MM/YYYY HH:mm:ss')
    });
  } else {
    res.send('Invalid timestamp');
  }


});

module.exports = router;
