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
  	} else if (cmd === 'cat') {
  		cat(cmdArr.slice(1));
  	} else if (cmd === 'head') {
  		head(cmdArr.slice(1));
  	} else if (cmd === 'tail') {
  		tail(cmdArr.slice(1));
  	} else if (cmd === 'sort') {
  		sort(cmdArr.slice(1));
  	} else if (cmd === 'wc') {
  		wc(cmdArr.slice(1));
  	} else if (cmd === 'uniq') {
  		uniq(cmdArr.slice(1));
  	}



  }
	var done = function(){
		process.stdout.write('\nprompt > ');
	}
  var pwd = function(file) {
  	process.stdout.write(process.env.PWD);
		done();
  }

  var date = function(file) {
		var date = new Date(98, 1);
		date.setFullYear(2070)
		process.stdout.write(date.toString());
		done();
  }

  var ls = function(file) {
  	fs.readdir('.', function(err, files) {
  		if(err) throw err;
  		files.forEach(function(file) {
  			process.stdout.write(file.toString() + '\n');
  		})
  		done();
  	});
  }

  var echo = function(file) {
  	process.stdout.write(file.join(' '));
		done();
  }

 var cat = function(file) {
	 fs.readFile(file[0], 'utf8', function(err, lines){
		 if(err) throw err;
		 process.stdout.write(lines + '\n');
		 done();
	 });

 }

 var head = function(file) {
	 fs.readFile(file[0], 'utf8', function(err, lines){
		 	if(err) throw err;
			 var splitLines = lines.split('\n')
			 process.stdout.write(splitLines.slice(0,5).join("\n"));
			 done();
	 });
 }

 var tail = function(file) {
	 fs.readFile(file[0], 'utf8', function(err, lines) {
		 	if(err) throw err;
			 var splitLines = lines.split('\n')
			 var len = splitLines.length
			 process.stdout.write(splitLines.slice(len-5).join("\n"));
			 done();
	 });

 }
 var sort = function(file) {
	 fs.readFile(file[0], 'utf8', function(err, lines){
		 	if(err) throw err;
			 var splitLines = lines.split('\n')
			 process.stdout.write(splitLines.sort().join("\n"));
			 done();
	 });
 }
 var wc = function(file) {
	 fs.readFile(file[0], 'utf8', function(err, lines){
		 	if(err) throw err;
			 var splitLines = lines.split('\n')
			 process.stdout.write(String(splitLines.length));
			 done();
	 });
 }
 var uniq = function(file) {
	 fs.readFile(file[0], 'utf8', function(err, lines){
		 	if(err) throw err;
			 var splitLines = lines.split('\n');
			 var newArr = [];

			 splitLines.forEach(function(line, index){
						if (line !== splitLines[index-1]) {
						newArr.push(line);
					}
			 })

			 process.stdout.write(newArr.join("\n"));
			 done();
	 });
 }
