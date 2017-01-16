console.log(process)

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === "pwd") {
    process.stdout.write(process.env.PWD);
  }
  else if (cmd === 'date') {
    var date = new Date(98, 1);
    date.setFullYear(2070)
    process.stdout.write(date.toString());
  }

 // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});
