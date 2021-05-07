const {serverConfig} = require('./config/settings.json');
const appName = `${serverConfig.Name} Server V${serverConfig.version}`;
module.exports = {
  apps : [{
    name: appName,
    script: "./Server.js",
    log_type: 'json',
    log_date_format: 'YYYY-MM-DD HH:mm',	
    output: './data/out.log',
    error: './data/error.log',
    log: './data/combined.outerr.log',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]}