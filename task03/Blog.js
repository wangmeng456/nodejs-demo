// const { chapterList, userList} = require('./demo1');
// const http = require('http'),
//       fs = require('fs'),
//       path = require('path'),
//       qs = require("querystring"),
//       URL = require('url');

// var Id=0;
// var nowChapter = {};

// http.createServer((req,res)=>{
//   if(req.url === '/login'){
//     var listPath = path.join(__dirname,'login.html');
//     res.writeHead(200,{'Content-Type':'text/html'});
//     fs.readFile(listPath,'utf-8',(err,data)=>{
//         if(err){
//           // console.error(message);
//         }else{
//           res.end(data);
//         }
//     })
//   }
//   else if(req.url === '/list'){
//     var listPath = path.join(__dirname,'chapterList.html');
//     res.writeHead(200,{'Content-Type':'text/html'});
//     fs.readFile(listPath,'utf-8',(err,data)=>{
//       if(err){
//         // console.error(message);
//       }else{
//         res.end(data);
//       }
//     })
//   }
//   else if(req.url == '/a/'){
//     res.write(JSON.stringify(chapterList));
//     res.end();
//   }
//   else if(URL.parse(req.url).pathname == '/detail'){
//     var listPath = path.join(__dirname,'chapter.html');
//     Id=URL.parse(req.url).query.replace(/chapterId=/,"")-1;
//     res.writeHead(200,{'Content-Type':'text/html'});
//     fs.readFile(listPath,'utf-8',(err,data)=>{
//       if(err){
//         // console.error(message);
//       }else{
//         // console.log(data);
//         res.end(data);
//       }
//     })
//   }
//   else if(URL.parse(req.url).pathname == '/listmanager'){
//     console.log(URL.parse(req.url, true).query.username);
//     if(URL.parse(req.url, true).query.username == userList[0].username && URL.parse(req.url, true).query.pwd ==userList[0].pwd ){
//       var listPath = path.join(__dirname,'list.html');
//       res.writeHead(200,{'Content-Type':'text/html'});
//       fs.readFile(listPath,'utf-8',(err,data)=>{
//       if(err){
//         // console.error(message);
//       }else{
//         res.end(data);
//       }
//     })
//     }else{
//       res.end('404');
//     }
//   }
//   else if(req.url === '/addChapter/'){
//     var listPath = path.join(__dirname,'addChapter.html');
//     res.writeHead(200,{'Content-Type':'text/html'});
//     fs.readFile(listPath,'utf-8',(err,data)=>{
//       if(err){
//         // console.error(message);
//       }else{
//         res.end(data);
//       }
//     })
//   }
//   else if(req.url == '/art/'){
//     res.write(JSON.stringify(chapterList));
//     res.end();
//   }else if(req.url == '/nowChapter/'){
//     res.writeHead(200,{'Content-Type':'text/json'});
//     nowChapter=chapterList[Id];  
//     res.end(JSON.stringify(nowChapter));
//   }else if(req.url == '/add'){
//     console.log("收到");
//     var newChapter = {};
//     var postData = ""; 
//     // 数据块接收中
//     req.addListener("data", function (postDataChunk) {
//       postData += postDataChunk;
//       var title=qs.parse(postData).title;
//       var content=qs.parse(postData).content;
//       console.log(qs.parse(postData));
//       newChapter.chapterId=chapterList.length+1;
//       newChapter.chapterName=title;
//       newChapter.chapterDes=content;
//       newChapter.chapterContent=content;
//       newChapter.publishTimer= "2019-08-19";
//       newChapter.author="admin";
//       newChapter.views=1022;
//       newChapter.imgPath='';
//       chapterList.push(newChapter);
//     });
//   }else if(req.url !== '/'){
//     var cpurl = '.'+req.url;
//     res.writeHead(200,{'Content-type':"text/css"});
//     fs.readFile(cpurl, function(err, data) {
//       if (err) {
//         //console.error(err);
//       }else{
//         res.end(data);
//       }
//     });
//   }
// }).listen(8083);

const http = require('http'),
      fs   = require('fs'),
      log  = console.log,
      qs   = require('querystring');

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
}
