const {serverConfig, dbConfig, mailserverconfig} = require('./Config/settings.json');

const logger = require('./Config/logger');
const passport = require('passport');
const flash = require('connect-flash');
const favicon = require('express-favicon');
const session = require('express-session');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('./config/passport')(passport);
// DB Config
const db = dbConfig.dbConnector;

// Connect to MongoDB
mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>logger.success(`Connected to database, DBtype: ${dbConfig.dbType}, host: ${mongoose.connection.host}`))
.catch(err => logger.crierror(`ERROR CONNTECTING TO DB SEE ERROR: ${err}`));

// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
// Express session
app.use(
    session({
      secret: serverConfig.TokenSecret,
      resave: true,
      saveUninitialized: true
    })
  );
  
  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Connect flash
  app.use(flash());
  app.use(favicon(__dirname + '/public/favicon.png'));
  app.use(express.static(__dirname + '/public'));
  app.use('/vidlibimg', express.static(__dirname + '/Public/vidlib/thumbnails'));
  // Global variables
  app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });

//GLOBAL VARS
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
//ROUTER
app.use('/admin', require('./Router/admin'));
app.use('/api', require('./Router/api'));
app.use('/', require('./Router/index'));
app.use('/users', require('./Router/users'));
//LISTENER
const server = app.listen(serverConfig.port,()=>logger.success(`${serverConfig.Name} server V${serverConfig.version} running reachable at http://127.0.0.1:${serverConfig.port}`));