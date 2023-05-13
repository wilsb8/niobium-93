const express = require('express');
const app = express();

//EJS Middleware
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

//Static site middleware
app.use(express.static('public'));
app.use(express.static('views'));

const router = require('../routes/router')
app.use('/', router);

module.exports = app;