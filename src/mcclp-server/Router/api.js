const express = require('express');
const router = express.Router();
const {serverConfig, APIAUTH} = require('../Config/settings.json');
const logger = require('../Config/logger');
const {format, fromUnixTime} = require('date-fns');
const dateadded = format(new Date(), 'MM/dd/yyyy h:mm');




module.exports = router;