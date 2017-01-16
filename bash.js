var commands = require('./commands.js');

console.log(process)

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  // var cmd = data.toString().trim(); // remove the newline
  var cmd = data.toString().trim().split(' ');

  commands.commands(cmd);

});
