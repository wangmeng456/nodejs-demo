#!/usr/bin/node

const fs = require('fs');
     // mod = process.argv[2],
     // dst = process.argv[3];

//fs.chmodSync(dst, Number(mod));

try{
  fs.chmodSync('../template.js', 0o764);
}
catch(err){
  console.err(err.message);
  process.exit(2);
}
