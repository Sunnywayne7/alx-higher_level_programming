#!/usr/bin/node
const process = require('process');
let len = process.argv.length;

if (typeof process.argv[2] == 'undefined') {
	console.log("No argument")
}

else {
	console.log(process.argv[2])
}

