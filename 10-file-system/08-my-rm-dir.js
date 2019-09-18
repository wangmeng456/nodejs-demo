#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2];

if(fs.existsSync(dir)) {
  fs.rmdirSync(dir);
}
else {
  console.error('%s not exist!', dir);
  process.exit(1);
}
