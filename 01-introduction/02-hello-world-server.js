#!/usr/bin/node

const http=require('http');
http.createServer((req, res)=>{
  res.end('helloworld');
}).listen(8080);
