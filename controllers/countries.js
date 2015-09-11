var express = require('express');
var controller = express.Router();

var countriesModel = require('../models/Countries');
var bodyParser = require('body-parser');

/* API */

// get all countries
controller.get('/', function(req, res, next) {

  countriesModel.find(function() {
    if (error) return error;
    res.json(countries);
  });
});

module.exports = controller;
