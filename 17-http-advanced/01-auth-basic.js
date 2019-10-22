#!/usr/bin/node

const http = require('http'),
      log = console.log;

http.createServer((req, res) => {
  log(`\n\n${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log();

  switch(req.url) {
    case '/admin':
      var auth = req.headers.authorization;
      if(typeof auth !== 'undefined'){
        var usr = getUserNamePasswd(auth);
        if(usr.username === 'wangding' && usr.password === '123'){
          showSecret(req, res);
                        
        }else{
          res.statusCode = 401;
          res.setHeader('WWW-Authenticate', 'basic');
          showNormal(res);
                                    
        }
              
      }else{
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'basic');
        showNormal(res);
                      
      }
      break;

    default:
      showNormal(res);
      break;
  }
  
  res.end('OK!');
}).listen(8080);

function showNormal(res) {
  res.end('hello! A good day!');
}

function showSecret(req, res) {
  res.end('hello! wangding\'s mobile number: 13582027613');
}

function getUserNamePasswd(auth){
  log('authorization:', auth);
  if(typeof auth!=='undefined'){
    ath = auth.split(' ');
    if(ath[0] === 'Basic'){
      var buf = new Buffer(ath[1], 'base64');
      var usr = buf.toString('utf8').split(':');
      log('username:', usr[0]);
      log('password:', usr[1]);
      log('username & passworld:', buf.toString('utf8'));
                                      
    }
          
  }

  return {
    username:usr[0],
    password:usr[1]
  }
}
