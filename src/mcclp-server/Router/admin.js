const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const {serverConfig}= require('../Config/settings.json')
const logger = require('../Config/logger');

router.get('/dashboard',ensureAuthenticated, (req,res)=>{
    res.render('admindash',{user: req.user,sitename:serverConfig.Name });

});
module.exports = router;