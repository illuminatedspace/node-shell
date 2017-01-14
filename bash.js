function my_prompt(){

  //global var in node
  process
}


console.log(Object.keys(process))

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});
