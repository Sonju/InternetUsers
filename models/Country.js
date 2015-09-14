var mongoose = require('mongoose');

// 1st Declare a schema
  // Blueprint for objects
var CountrySchema = new mongoose.Schema({
  country: String,
  year: String,
  value: Number,
});


// var Country = {
//   year: "2013",
//   name: "Kenya",
//   value: 97
// };
//

// 2nd Export our model for use in our node app// export!
  // mongoose.model('string name of model', schema);
module.exports = mongoose.model('Country', CountrySchema);
