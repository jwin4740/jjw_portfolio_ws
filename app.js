#!/usr/bin/env nodejs


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


const port = 8080;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    res.send('index.html');
});


app.listen(port, function () {
    console.log('server listening on port:', port)
});

