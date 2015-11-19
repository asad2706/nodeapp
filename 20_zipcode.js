
/*
custom modules:
we can search modules from our command bash
but we can not see all at the same time on console or command bash
	npm search
so we can specify selected modules by giving it a name
	npm search youtube
will give all the modules related to youtube.

or u can see them on "search.npmjs.org"

use command bash to install:
	npm install zipcode
you will get a folder inside ur "nodeapp" folder. for node packages installed.

then import it into our files:
	var zipcode = require('zipcode');
 
// it returns data in [city, state] format 
	zipcode.lookup('94122'); // ['SAN FRANCISCO','CA'] 

*/

var zipcode = require('zipcode');

console.log(zipcode.lookup('01913'));