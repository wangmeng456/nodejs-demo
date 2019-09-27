#!/usr/bin/node
const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log('');

  req.pipe(process.stdout);

  res.end('hello client');

}).listen(8080);

