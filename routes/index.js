var express = require('express');
var router = express.Router();
//add models files
var Order = require('../models/order');
var Cookie  = require('../models/cookie');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');

  // Order.find(function(err,orders){
  //     if (err) {
  //         return next(err);
  //     }
  //     res.render('index', {orders: orders});
  // })
});/*end of home page*/

/*GET about page*/
router.get('/about', function(req, res, next) {
    res.render('about');
});// end of about page

// GET order_page
router.get('/order_page', function(req, res, next) {
    res.render('order_page');
});//end of order_page

// POST order_page shipping input
router.post('/add', function(req, res, next) {

    var order = Order(req.body);
    console.log(req.body);
    // var order = Order(req.body);
    order.save(function(err, neworder) {
        if (err){
            return next(err);
        }
        return res.redirect('/')//need a confirmation message
    });


});
module.exports = router;
