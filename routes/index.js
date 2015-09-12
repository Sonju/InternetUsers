var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Africa Mobile Subscriptions API' });
});

// GET Angular View Page
router.get('/api', function(req, res, next) {
  res.json({"test": "hi"})
});

module.exports = router;
