const express = require('express');
const app = express();
const router = require('../routes/router') // this is how you find the routes folder

//EJS Middleware
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

//Static site middleware
app.use(express.static('public'));
app.use(express.static('views'));

// Nodemailer 

// Finally

app.use('/', router);

module.exports = app;