var createError = require('http-errors');
var http = require('http');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');
var commentRouter = require('./routes/comment');
var replayRouter = require('./routes/replay');
var authRouter = require('./routes/auth');
var cors = require('cors');
var mongoose = require('mongoose');
var keys = require('./config/keys');
var app = express();


mongoose.connect(keys.database, { useNewUrlParser: true });
// // On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database at 27017');
});
// // On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+ err);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist/')));
app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.static(path.join(__dirname, 'users_images/')));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())

require('./config/passport')(passport);
app.use('/users', usersRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);
app.use('/replay', replayRouter);
app.use('/auth', authRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname, 'dist/index.html'));

  // res.json({
  //   message: err.message,
  //   error: err
  // });
});
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('**', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = app;
