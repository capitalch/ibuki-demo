'use strict';
const path = require('path');
const express = require('express');
const app = express();

const argv = require('minimist')(process.argv.slice(2));

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', ' GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// console.log(__dirname);
var __publicFolder = __dirname + '/dist/ibuki-demo';
app.use(express.static(__publicFolder));

// API
app.get('/', function (req, res) {
    res.sendFile(path.join(__publicFolder + '/index.html'));
});

// Allow for Jenkins smoke test
app.get('/test', function (req, res) {
    res.send('hello jenkins');
});

// Running the server
app.listen(argv.p, _ => console.log('Running on port ' + argv.p));
// app.listen(4200, _ => console.log('Running on port ' + 4200));