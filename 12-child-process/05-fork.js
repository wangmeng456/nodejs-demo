#!/usr/bin/node

const cp = require('child_process');

console.log('I am father with id:', process.pid);

var child = cp.fork('./02-child.js');
//child.stdout.pipe(process.stdout);
//child.stderr.pipe(process.stderr);

global.setTimeout(function(){
  child.send('Hello I am your father!');
},2000);
