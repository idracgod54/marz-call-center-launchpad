const colors = require('colors');
//NORMAL_MSG
module.exports.normal = function(normalmsg) {
    console.log(colors.cyan(colors.bold(normalmsg)));
};
//SUCCESS_MSG//
module.exports.success = function(successmsg) {
    console.log(colors.green(colors.bold(successmsg)));
};
//WARN_MSG
module.exports.warn = function(warnmsg) {
    console.log(colors.yellow(colors.bold(warnmsg)));
};
//ERROR_MSG
module.exports.error = function(errormsg) {
    console.log(colors.red(colors.bold(errormsg)));
};
//ERROR_MSG_CRITICAL
module.exports.crierror = function(crierrormsg) {
    console.log(colors.bgBrightRed(colors.bold(crierrormsg)));
};

//WARN_MSG_CRITICAL
module.exports.criwarn = function(criwarnmsg) {
    console.log(colors.brightYellow(colors.bold(criwarnmsg)));
};
//////////////DEV_MESSAGES////////////
//NORMAL_MSG_DEV
module.exports.normaldev = function(normaldevmsg) {
    console.log(colors.bgCyan(colors.bold(normaldevmsg)));
};
//SUCCESS_MSG_DEV//
module.exports.successdev = function(successdevmsg) {
    console.log(colors.bgGreen(colors.bold(successdevmsg)));
};
//WARN_MSG_DEV
module.exports.warndev = function(warndevmsg) {
    console.log(colors.bgYellow(colors.bold(warndevmsg)));
};
//ERROR_MSG_DEV
module.exports.errordev = function(errordevmsg) {
    console.log(colors.bgRed(colors.bold(errordevmsg)));
};
//ERROR_MSG_CRITICAL_DEV
module.exports.crierrordev = function(crierrordevmsg) {
    console.log(colors.bgBrightRed(colors.bold(crierrordevmsg)));
};
//WARN_MSG_CRITICAL_DEV
module.exports.criwarndev = function(criwarndevmsg) {
    console.log(colors.brightbgYellow(colors.bold(criwarndevmsg)));
};