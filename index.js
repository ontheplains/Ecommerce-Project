'use strict';

// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

// Configuration
var config = require('./config/db.js');

// Controllers
//var userCtrl = require('./app/controllers/userCtrl');
//var placeCtrl = require('./app/controllers/productCtrl');

// Express
var app = express();

// Middelware
app.use('/', bodyParser.json());
app.use('/', morgan('dev'));
app.use('/', cors());
app.use('/', express.static('./public'));

// Routes


// Tests
app.get('/', function(req, res){
    res.send('this is just a test')
});
// Users

// Places


// Connection to database
mongoose.connect(db.uri, function(err) {
    if (err) {
        console.log('Connection to MongoDB failed!');
    } else {
        console.log('Connected to MongoDB at: ', db.uri);
    }
});

// Connection to server
app.listen(db.port, function(err) {
    if(err) {
        console.log('Connection to Node Server failed!');
    } else {
        console.log('Express listening on port ' + db.port + '!');
    }
});
