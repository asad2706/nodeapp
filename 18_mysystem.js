
// nodejs.org/api.....has tones of info about all the modules of node to use functions of node
// u can even use node interpretor to learn about all the modules available in node.
// type "node"...
// with like "reuire('http')" or "require('os')" it will give all available functions from module "http" and also the "status codes".
// like 404(not found).....200(no error).


var os = require('os');
// to use functions of operating system module
var message = 'This is some info about your system.';

var sysarray = new Array('Type: '+os.type(),
	// 'a' in Array is capitals.
	'Node Version: '+process.version,
	// remember not to use "()" for process.version 
	// process() is a module we can call globally it doesn't require to import its module
	'Platform: '+os.platform(),
	'Hostname: '+os.hostname(),
	'Total Memory: '+os.totalmem(),
	'Free Memory: '+os.freemem(),
	'Up time: '+os.uptime()
	);
// type is a function of os module.

console.log(message);

var arraylen = sysarray.length;
// remember not to use "()" for length
i=0;
while(i < arraylen){
	console.log(sysarray[i]);
	i++;
};