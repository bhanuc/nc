
const
     fs = require('fs'),
     c_process = require('child_process'),
     pty = require('pty.js');


module.exports = {
	compile: function(location, options, cb) {
	var cmd = 'gcc ';
	if (!(options == null || options.length == 0)) {
		cmd=cmd.concat(options.concat(' '));
	}
	c_process.exec(cmd + location , function (error, stdout, stderr) {
	   if (error) {
	   		var err = { error: {stack: error.stack, code: error.code, signal: error.signal, killed: error.killed, stderr: stderr  } };
	   	    cb(err, stdout, stderr);	  
	   		return err;
	   } else {
	   		cb(err, stdout, stderr);	  
	   		return true;
	   }
	   cb(err, stdout, stderr);	   
	 });
	},

	execute: function(location, filename, listeners,  cb) {
	
		var cmd = location+'/'+filename ;
		
		var term = pty.spawn('cmd', [], {
		  name: 'xterm-color',
		  cols: 80,
 	   	 rows: 30,
		  cwd: process.env.HOME,
  		env: process.env
		});
		var result = "";

		var keys = Object.keys(listeners);
		
		if(keys.length){
			term.on('data', function(data) {
				for (var i = keys.length - 1; i >= 0; i--) {
					if(data.search(keys[i]) >= 0){
						term.write(listeners[keys[i]] +'\n');
					} else {
						result = result + data;
					}
				};
		});
		} else {
			term.on('data', function (data) {
				result = result+data;
			})
		}

		term.on('exit', function (exit) {
			cb(null, result);
		})
	},
	
	execute2: function(location, filename, input,  cb) {
	
		var cmd = location+'/'+filename ;
		var randomname = Date.now();
		fs.writeFileSync(location+'/'+randomname, input);
		var term = pty.spawn('cmd', ['< '+'randomname'], {
		  name: 'xterm-color',
		  cols: 80,
 	   	 rows: 30,
		  cwd: process.env.HOME,
  		env: process.env
		});
		var result = '';

		term.on('data', function(data) {
			result = result + data;
		});
		
		term.on('exit', function (exit) {
			cb(null, result);
			fs.unlinkSync(location+'/'+randomname);
		})
	}
}


