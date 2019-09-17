#!/usr/bin/node

const MyReadable = require('./03-my-readable');

var r = new MyReadable();

r.pipe(process.stdout);
