const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const fs = require('fs')

const {render} = require('../babel-src/serverRender')

//Morgan Logging Format
const morganFormat = '(STATUS~:status) ":method :url HTTP/:http-version" (REM_ADDR~:remote-addr) (RES_TIME~:response-time[3]) (REM_USER~:remote-user) (RES_CON_LENGTH~:res[content-length]) (REFERRER~:referrer) (USER_AGENT~:user-agent)';

// routes
const index = require('./routes/index')

const universalLoader = require('./universal')

//Express Server
const app = express();

//Logging
app.use(morgan(morganFormat));

// Compression
app.use(compression({level: 1}))

/*
 * Important to serve this because if it is not there
 * `/` will serve index.html with NO SSR
 */
app.use('/', index)

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))

// Always return the main index.html, so react-router render the route in the client
app.use('/', universalLoader)

module.exports = app
