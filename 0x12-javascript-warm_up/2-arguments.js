#!/usr/bin/node
const process = require('process');
let len = process.argv.length;

if (len < 3) {
	console.log("No argument")
}

else {
	console.log("Argument found")
}

