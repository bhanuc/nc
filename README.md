#Node_C (N_C)
==

Compile C code on Node.js Process and return error if any

Usage:

```JavaScript
var n_c = require('n_c');
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
var result = n_c.compile(location+'/demo.c', null, callback);
```


#Installation:

```
npm install n_c
```

#Test:

mocha

#API
err is an object with follwing attributes 

stack: Node.js stack which also has the error

code: error code

signal: error signal

killed: process killed boolean value 

stderr: Actual error returned

#Author:

Bhanu Pratap Chaudhary

#Version History

0.0.1 - First release only exited

0.0.2 - Added options

0.0.3 - Add method to run the compiled code

0.0.4 - Added secondary method to run compiled code"

0.0.5 - Bug fixes