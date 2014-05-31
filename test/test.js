var should = require('should');
var location = __dirname;
var nc = require('../');

var callback = function(err,stdout,stderr){ 
	if(err){
		should.exist(err);
	} else {
		should.not.exist(err);
	}

};


describe("no error compile", function(){
it('should give no error if C file gets compiled without error', function(done) {
	nc.compile(location+'error.c', null, callback);
	done();
});
});
