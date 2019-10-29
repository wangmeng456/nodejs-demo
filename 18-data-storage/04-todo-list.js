#!/usr/bin/node

const http = require('http'),
      qs = require('querystring'),
      log = console.log;

var items = ['eat'];

http.createServer((req, res) => {
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  if(req.method === 'GET' && req.url === '/'){
    //200 OK
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(getHTML());
  }
  else if(req.method === 'POST' && req.url === '/'){
    //submit data
    var it = '';
    req.on('data',(data)=>{
      it += data;
    });

    req.on('end',()=>{
      if(typeof it !== 'undefined'){
        items.push(qs.parse(it).item);
      }

      res.end(getHTML());
    });

  }else{
    //error
    res.end('error!');
  }
}).listen(8080);

function getHTML(){
  return '<!DOCTYPE html><html><head><title>Hello</title><head><body><h1>TODO List</h1><ul>'+items.map(function(item) {return '<li>' + item + '</li>';}).join('\n')+'</ul><form method="POST" action="/"><input type="text" name="item"><input type="submit" value="submit"></form></body></html>';
}

const mysql = require('mysql'),
      con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ddd',
        database: 'test'
      });

con.connect();


function insert(){
  con.query('insert into books(item) values(?, ?, ?)', ['item'], (err, result) => {
    if(err){
      console.error(err.message);
      process.exit(1);
    }
    return 0;
  });
}

function select(){
  con.query('select * from books', (err, result) => {
    if(err) {
      console.error(err.message);
      process.exit(1);
    }
    items = result;
  });
}

con.end();
