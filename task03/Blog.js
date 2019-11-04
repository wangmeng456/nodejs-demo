const http = require('http'),
      fs   = require('fs'),
      log  = console.log,
      qs   = require('querystring'),
      path = require('path'),
      URL = require('url');

const { chapterList, userList } = require('./message');
var Id=0;

http.createServer(function(req, res) {
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  switch(req.method) {
    case 'GET':
      show(req, res);
      break;

    case 'POST':
      add(req, res);
      break;

    default:
      err(res);
      break;
  }
}).listen(8083);

function err(res) {
  var msg = 'Not found';
  res.writeHead(404, {
    'Content-Length': msg.length,
    'Content-Type': 'text/plain'
  });
  res.end(msg);
}

function show(req, res) {
  if(req.url == '/list') {
    var html = fs.readFileSync('./chapterList.html');
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': Buffer.byteLength(html),
      'Access-Control-Allow-Origin': '*'
    });
    res.end(html);
  }
  else if(URL.parse(req.url).pathname == '/detail'){
    var html = fs.readFileSync('./chapter.html');
    Id = URL.parse(req.url).query.replace(/chapterId=/,"")-1;
    console.log(Id);
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': Buffer.byteLength(html),
      'Access-Control-Allow-Origin': '*'
    });
    res.end(html);
  }
  else if(req.url == '/login') {
    var html = fs.readFileSync('./login.html');
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': Buffer.byteLength(html),
      'Access-Control-Allow-Origin': '*'
    });
    res.end(html);
  }
  else if(req.url == '/listmanager') {
    var html = fs.readFileSync('./list.html');
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': Buffer.byteLength(html),
      'Access-Control-Allow-Origin': '*'
    });
    res.end(html);
  }
  else if(req.url == '/addChapter') {
    var html = fs.readFileSync('./addChapter.html');
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': Buffer.byteLength(html),
      'Access-Control-Allow-Origin': '*'
    });
    res.end(html);
  }
  else if(req.url == '/message'){
    let message = JSON.stringify(chapterList);
    res.end(message);
  }
  else if(req.url == '/llist/'){
    res.write(JSON.stringify(chapterList));
    res.end();
  }
  else if(req.url == '/getDetail/'){
    res.writeHead(200,{'Content-Type':'text/json'});
    getDetail=chapterList[Id];  
    console.log(getDetail);
    res.end(JSON.stringify(getDetail));
  }
  else if(req.url != '/'){
    var url1 = '.'+req.url;
    res.writeHead(200, {
      'Content-type':"text/css"
    });
    fs.readFile(url1, function(err, data) {
      res.end(data);
    });
  }
}

function add(req, res) {
  if(req.url == '/login') {
    let user = '';
    let sign = 0;
    req.on('data', (data)=>{
      user += data;
    });
    req.on('end', ()=>{
      user = JSON.parse(user);
      userList.map((item)=>{
        if(item.username == user.username && item.pwd == user.pwd){
          sign = 1;
          res.statusCode = 200;
          res.end('OK');
        }
      });
      if(sign == 0){
        res.statusCode = 404;
        res.end('ERROR')
      }
    });
  }
  else if(req.url == '/add') {
    let getMessage = {};
    let message = '';
    req.on('data',(data)=>{
      message += data;
    });
    req.on('end',()=>{
      message = qs.parse(message.toString('utf8'));
      getMessage.chapterId = chapterList.length+1,
      getMessage.chapterName = message.title,
      getMessage.imgPath = message.imgPath,
      getMessage.chapterDes = message.content,
      getMessage.chapterContent = message.content,
      getMessage.publishTimer = new Date().getTime(),
      getMessage.author = "admin",
      getMessage.views = 1024,
      chapterList.push(getMessage);
    });
    res.end('OK');
  }
}