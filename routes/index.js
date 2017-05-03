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


module.exports = router;
