const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to log HTTP requests
app.use(morgan('dev'));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Include the router from router.js
const router = require('../routes/router');
app.use('/', router);