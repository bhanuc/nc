var should = require('should');
var location = __dirname;
var nc = require('../');

describe("error compile", function(){
it('should give a error if C file gets compiled with error', function(done) {

var callback = function(err,stdout,stderr){ 
	if(err){
		err.error.should.have.properties('stack','code','signal','killed','stderr');
		should.exist(err);
		(stdout).should.be.exactly('');
		(stderr).should.not.be.exactly('');
	} else {
		should.not.exist(err);
		(stdout).should.be.exactly('');
		(stderr).should.be.exactly('');
	}

};

	nc.compile(location+'error.c', null, callback);
	done();
});
});

describe("No error compile", function(){
it('should not give an error if C file gets compiled without error', function(done) {

var callback = function(err,stdout,stderr){ 
	if(err){
		err.error.should.have.properties('stack','code','signal','killed','stderr');
		should.exist(err);
		(stdout).should.be.exactly('');
		(stderr).should.not.be.exactly('');
	} else {
		should.not.exist(err);
		(stdout).should.be.exactly('');
		(stderr).should.be.exactly('');
	}

};

	nc.compile(location+'noerror.c', null, callback);
	done();
});
});
