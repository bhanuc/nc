var n_c = require('../');
var location = __dirname;

//A function that we want to run when the code has compiled
var callback = function(err, data){ 
	if(err){
		console.log('The code encountered an error');
		console.log(err);
	} else {
		console.log('The code ran successfully');
		console.log(data);
	}
};

var runresult = n_c.execute(location, 'a.out', {}, callback);