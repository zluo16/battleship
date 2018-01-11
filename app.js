const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const socket = require('socket.io').listen(4000).sockets;
const mongoose = require('mongoose');

// Initialize app
const app = express();

// Set up logger
app.use(morgan('dev'));

// Set up body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));


module.exports = app;
