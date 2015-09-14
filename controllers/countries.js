var express = require('express');
var controller = express.Router();
var bodyParser = require('body-parser');
var countryModel = require('../models/CountrySchema');  // models/CountrySchema.js


/* API */

// Get countries view page
// get all countries
controller.get('/api/countries', function(req, res, next) {

  // use our model to find all countries
  countryModel.find(function(error, countries) {
    if (error) return error;
    res.json(countries);
  });
});

module.exports = controller;
