'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const fs = require('fs');
const https = require('https');
const app = express();

const credentials = {
  key: fs.readFileSync(path.normalize(__dirname + '/certificates/server.key')),
  cert: fs.readFileSync(path.normalize(__dirname + '/certificates/server.crt'))
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
  res.render('index', { title: 'https secured site' });
});

// error handlers

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

https.createServer(credentials, app).listen(8080, function () {
  console.log("Express SECURE server listening on https://localhost:8080/ \n\n");
});

module.exports = app;
