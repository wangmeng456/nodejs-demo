#!/usr/bin/node

if(process.argv.length !== 3) {
  console.error('命令行格式：cmd base64_string');
  process.exit(1);
}

const log = console.log;

var buf = new Buffer(process.argv[2], 'base64'),
    info = buf.toString('utf8').split(':');

if(info.length !== 2) {
  console.error('信息有误！');
  process.exit(2);
}

log('use:%s,pwd:%s',info[0],info[1]);
