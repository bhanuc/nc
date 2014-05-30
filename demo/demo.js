var n_c = require('../');
var location = __dirname;

//A function that we want to run when the code has compiled
var callback = function(err,stdout,stderr){ 
	if(err){
		console.log('The code encountered an error');
		console.log(err);
	} else {
		console.log('The code compiled successfully');
		console.log('stderr: '+stderr+'& stdout: '+stdout);
	}
};
var result = n_c.compile(location+'/demo.c',callback);
