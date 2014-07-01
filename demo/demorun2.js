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

var runresult = n_c.execute2('workspace/nc/demo', 'a.out', "1 \n 2 \n 3 \n", callback);