// cookie database
//static for now, need to optimize for future growth

//use mongoose
var mongoose = require('mongoose');

//represents each cookie
var cookieSchema = new mongoose.Schema({
    cookieName: { type : String, required: true },
    description: { type: String, required: true },
    boxesOrdered: { type: Number, required: true}
});

var Cookie = mongoose.model('Cookie', cookieSchema);

module.exports = Cookie;