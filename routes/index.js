var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});
/*end of home page*/

/*GET about page*/
router.get('/about', function(req, res, next) {
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/text");
    // res.write("All about this application");
    // res.end();
    res.render('about');
});

module.exports = router;
