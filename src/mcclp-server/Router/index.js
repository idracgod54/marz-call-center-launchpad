const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const {serverConfig} = require('../Config/settings.json');
const sitename = serverConfig.Name;
// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('index',{sitename}));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>{
  if (req.user.role === 'Admin') {
    res.redirect('/admin/dashboard')
  }else {
    res.render('dashboard', {user: req.user, sitename});
  }
});
////VIDLIB
router.get('/vidlib', ensureAuthenticated, (req, res) =>{
  const courseindex = require('../Public//vidlib/courses/courseindex.json');
  res.render('vidlib', {user: req.user, sitename, Clist: courseindex})
});
module.exports = router;