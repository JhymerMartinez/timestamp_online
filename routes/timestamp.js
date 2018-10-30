var express = require('express');
var router = express.Router();
var moment = require('moment-timezone');

/* GET users listing. */
router.get('/:timestamp', function(req, res, next) {
  var timestamp = parseInt(req.params.timestamp);
  var date = moment(timestamp);
  var isValid = date.isValid();
  var tz = req.query.tz;

  if (isValid) {
    res.render('timestamp', {
      timestamp: req.params.timestamp,
      date: date.tz(tz).format('DD/MM/YYYY HH:mm:ss')
    });
  } else {
    res.send('Invalid timestamp');
  }


});

module.exports = router;
