const { Schema, model } = require('mongoose');

const PurchaseSchema = new Schema({
  userId: String,
  title: String,
  value: Number
});


module.exports = model('Purchase', PurchaseSchema);