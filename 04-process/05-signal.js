#!/usr/bin/node
process.on('SIGINT',()=>{
  console.log('you press ctrl+C or kill -2');
  process.exit();
});
process.on('SIGTSTP',()=>{
  console.log('you press ctrl+Z');
  process.exit();
});
process.stdin.resume();
