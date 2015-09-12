var mongoose = require('mongoose');

// 1st - need a connection string
var connectionString = 'mongodb://localhost/countries';

// 2nd - need to make connection
mongoose.connect(connectionString);

// 3rd - listen for events and log changes
mongoose.connection.on('connected', function() {
  console.log('Mongoose has connected to: ' + to connectionString);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose has disconnected from: ' + to connectionString);
});
mongoose.connection.on('connected', function(error) {
  console.log('Mongoose has experienced an error: ' + error);
});
