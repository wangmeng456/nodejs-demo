#!/usr/bin/node

const fs = require('fs');

var opt, src, lnk;

switch(process.argv.length) {
  case 4: //hard link
    src = process.argv[2];
    lnk = process.argv[3];

    fs.linkSync(src, lnk);

    break;

  case 5: //soft link
    opt = process.argv[2];
    src = process.argv[3];
    lnk = process.argv[4];

    if(opt !== '-s') errMsg();

    fs.symlinkSync(src, lnk);

    break;

  default: //error
    errMsg();
}

function errMsg() {
  console.log('ERR:命令行语法不正确！');
  process.exit(1);
}
