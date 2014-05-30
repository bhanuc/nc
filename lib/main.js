
const
     fs = require('fs'),
     process = require('child_process');


module.exports = {
	compile: function(location, option, cb){
	var cmd = 'gcc ';
	if (!(option == NULL || option.length == 0)) {
		cmd=cmd.concat('-'.concat(option));
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
	}
}
// Check If I need to handle exit event of the process or not

