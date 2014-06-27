
const
     fs = require('fs'),
     process = require('child_process');


module.exports = {
	compile: function(location, options, cb) {
	var cmd = 'gcc ';
	if (!(options == null || options.length == 0)) {
		cmd=cmd.concat(options.concat(' '));
	}
	process.exec(cmd + location , function (error, stdout, stderr) {
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
		var result = Object.create(null);
		var cmd = location+filename ;
		var run = process.spawn(cmd);
		var keys = Object.keys(listeners);
		run.stdout.on('data', function (data){
			if(keys.indexOf(data) >= 0){
					run.stdin.write();
			} else {
				cb(err, result);
			}
		});
	}
}


