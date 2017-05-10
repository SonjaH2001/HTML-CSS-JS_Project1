var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
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
router.post('/order_page', function(req, res, next) {

    req.order_collection.updateOne(
        { _id : ObjectID(req.body._id) },
        {$set : {completed : true }},
        function(err, result){

            if (err) {
                return next(err); //in case of database error
            }
            if (result.result.n ==0) {
                var req_err = new Error("order not found");
                req_err.status = 404;
                return next(req_err); //order not found in database
            }

            req.flash('info', 'Thank you for your order, cookies coming soon!');
            return res.redirect('/')
        })
})
module.exports = router;
