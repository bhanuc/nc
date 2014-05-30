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
var result = n_c.compile(location+'/demo.c',callback);
```


#Installation:

```
npm install nc-cluster
```

#Test:
Coming very Soon !!

#API
err is an object with follwing attributes 

stack: Node.js stack which also has the error

code: error code

signal: error signal

killed: process killed boolean value 

stderr: Actual error returned

