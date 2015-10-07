var mongoose = require('mongoose');

// 1st - need a connection string
var connectionString = 'mongodb://mongouser:Blackshoe10!@ds029297.mongolab.com:29297/mobiledb';

// 2nd - need to make connection
mongoose.connect(connectionString);

// 3rd - listen for events and log changes
mongoose.connection.on('connected', function() {
  console.log('Mongoose has connected to: ' + connectionString);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose has disconnected from: ' + connectionString);
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose has experienced an error: ' + error);
});
