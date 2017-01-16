  var exports = module.exports = {};
  var fs = require('fs');

  exports.commands = function(cmdArr) {
  	var cmd = cmdArr[0];
  	if (cmd === "pwd") {
    	pwd();
  	}
  	else if (cmd === 'date') {
  		date();
  	} else if (cmd === 'ls') {
  		ls();
  	} else if (cmd === 'echo') {
  		echo(cmdArr.slice(1));
  	}

 // process.stdout.write('You typed: ' + cmd);
  	process.stdout.write('\nprompt > ');
  }

  var pwd = function() {
  	process.stdout.write(process.env.PWD);
  }

  var date = function() {
	var date = new Date(98, 1);
	date.setFullYear(2070)
	process.stdout.write(date.toString());
  }

  var ls = function() {
  	fs.readdir('.', function(err, files) {
  		if(err) throw err;
  		files.forEach(function(file) {
  			process.stdout.write(file.toString() + '\n');
  		})
  		process.stdout.write('prompt > ');
  	});
  }

  var echo = function(argArr) {
  	process.stdout.write(argArr.join(' '));
  }

 