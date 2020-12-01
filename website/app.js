var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoDb = require('mongodb');

var database = require('./database')

var indexRouter = require('./routes/index');
var experiencesRouter = require('./routes/experiences');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/experiences', experiencesRouter);

module.exports = app;

database.connect()

 app.listen(80, () => {
     console.log("Serveur à l'écoute")
 })