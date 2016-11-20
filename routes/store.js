var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var storeType = (req.originalUrl).substring(1);
  res.render('store', { title: 'Home' });
});

module.exports = router;
