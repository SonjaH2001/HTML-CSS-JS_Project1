var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//add mongo and assert
var MongoClient = require('mongodb').MongoClient;
// add mongoose
var mongoose = require('mongoose');
var assert = require('assert');
//add flash and session
var flash = require('express-flash');
var session = require('express-session');


var index = require('./routes/index');
// var users = require('./routes/users');//do I still need this???????

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//MongoDB setup
// var mongo_pw = process.env.MONGO_PW;
// update MongoDB setup to use an environment variable
var url = process.env.MONGO_DB_URL;
//connecting to database
mongoose.connect(url);
// var url = mongodb://<dbuser>:<dbpassword>@ds133961.mlab.com:33961/cookie_db
// var url = 'mongodb://@localhost:27017/cookieDB';
// MongoClient.connect(url,function(err, db){

  // console.log('errors? ' + err);//show error message
  //   assert(!err); //crash is error connecting
  //   console.log('connected to MongoDB')//success message
  //   //call to cookie table in cookieDB database
  //   app.use(function (req,res,next) {
  //     req.cookie_collection = db.collection('cookieTable');
  //     next()
  //   })
  //   //call to order table in cookieDB database
  //   app.use(function (req,res,next) {
  //     req.order_collection = db.collection('orderTable');
  //     next()
  //   })

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//add to use session and flash
app.use(session({secret:'top secret key'}));//ignore warnings for now
app.use(flash());

app.use('/', index);
// app.use('/users', users);//do I still need this??????----

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// });

module.exports = app;
