#!/usr/bin/node
var pid = process.argv[3],
    sgn = process.argv[2];

if(process.argv.length !== 4 || isNaN(Number(pid))){
  console.error('命令行参数错误！');
  process.exit(1);
}

process.kill(pid,sgn);
