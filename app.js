const express = require('express');
const path = require('path');
const http = require('http');
const debug = require('debug')('battleship:server');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const serverConfig = require('./config/serverConfig');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const routes = require('./routes/');
const socket = require('socket.io').listen(4000).sockets;
const dbInfo = require('./config/database');
const mongoose = require('mongoose');

// Initialize app
const app = express();

// Run Webpack Dev Server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
};

// Connect with mongoose
mongoose.connect(dbInfo.url);
const db = mongoose.connection

// Set up logger
app.use(morgan('dev'));

// Set up body parser middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));

// Setting up routes
app.use('/', routes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`Server running on port: ${serverConfig.port}...`);
  }
});

module.exports = app;
