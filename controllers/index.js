var express = require('express');
var controller = express.Router();

/* GET home page. */
controller.get('/', function(req, res, next) {
  res.render('index', { title: 'Africa Mobile Subscriptions API' });
});

/* GET angular view page */
controller.get('/api', function(req, res, next) {
  res.json({"test": "hi"})
});

module.exports = controller;
