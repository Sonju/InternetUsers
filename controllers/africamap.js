var express = require('express');
var controller = express.Router();

controller.get('/', function(req, res, next) {
  res.render('africamap/index', { title: 'Africa Map Mobile Subscriptions per 100' });
});


module.exports = controller;
