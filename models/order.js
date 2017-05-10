//order database
//gets shipping details from user

//use mongoose
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');//future use, date order validation

// represents each order
var orderSchema = new mongoose.Schema({
    firstName: { type: String, required: true, uniqueCaseInsensitive: true },
    lastName: { type: String, required: true, uniqueCaseInsensitive: true },
    address: { type: String, required: true, uniqueCaseInsensitive: true },
    // city: { type: String, required: true, uniqueCaseInsensitive: true },
    // state: { type: String, required: true, uniqueCaseInsensitive: true },
    // zipCode: { type: String, required: true, uniqueCaseInsensitive: true },
    email: { type: String, required: true, uniqueCaseInsensitive: true },
    phone: { type: String, required: false, uniqueCaseInsensitive: true }
});

var Order = mongoose.model('Order', orderSchema);
    orderSchema.plugin(uniqueValidator);

module.exports = Order;