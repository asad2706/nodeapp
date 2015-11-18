/*
//when u r using node u don't need of any webserver...bcz it is a webserver. it can make http request itself.

var http = require('http');
//http is a module which we are importing.
// createServer is a function of that module.

// selfCalling functions are used in javascript bcz it is asynchronous....it calls itself sothat it gets executed.
http.createServer(function(req,res){
	// our response needs to have header so:
	res.writeHead(200,{'Content-type':'text/plain'});
	// 200 is status for normal request with no error.
	res.end('Hello Asad!');
	// output plain text
}).listen(1337,'127.0.0.1');
// which port to listen.
console.log('webserver has started!');


// but its not gonna show you an html text even if u have changed content-type : text/html
// so we will use filesystem module to use "readFile()" function.
*/

//when u r using node u don't need of any webserver...bcz it is a webserver. it can make http request itself.

var http = require('http');
//http is a module which we are importing.
// createServer is a function of that module.
var fs = require('fs');
// filesystem module for readFile() function to use.

// selfCalling functions are used in javascript bcz it is asynchronous....it calls itself sothat it gets executed.
http.createServer(function(req,res){
	fs.readFile('17_index.html',function(err,data){
		// this "data" will come from 17_index.html file so make one 17_index.html file.

		// our response needs to have header so:
		res.writeHead(200,{'Content-type':'text/html'});
		// 200 is status for normal request with no error.
		res.end(data);
		// output plain text
	});
	
}).listen(808,'127.0.0.1');
// which port to listen.
console.log('webserver has started!');
