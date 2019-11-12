var express = require('express');
var router = express.Router();
var data = require('../data.json');

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/list', function(req, res, next) {
  res.render('login');
});

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/list', function(req, res){
  if(isLegalUser(req)) {
    res.render('list',{items:data.chapterList});
  } else {
    res.send('用户名密码错误');
  }
});
console.log(data.users[0].username);
console.log(data.users[0].password);
function isLegalUser(req) {
  var user = {
    'username': req.body.username,
    'password': req.body.pwd
  };
  var isLegal = false;
  if(data.users[0].username === user.username && data.users[0].password === user.password) {
    isLegal = true;
    console.log(1);
  }
  return isLegal;
}

module.exports = router;
