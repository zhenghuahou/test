var chalk = require("chalk");

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return time;
}

// log is just a thin wrapper to console.log that prepends a timestamp
var log = function() {
    var arr = [];
    console.log('[%s]:%s ', chalk.cyan(timestamp()),arr.join.call(arguments,' '));
};


export default log
