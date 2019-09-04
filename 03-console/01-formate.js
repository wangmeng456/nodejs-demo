#!/usr/bin/node
var wd = {
  'Name':'王顶',
  'QQ':'408542507',
  'Age':43
};

const log = console.log;
log('Name:%s\t Age:%d',wd.Name,wd.Age);
log('WangDing Info:%j',wd);

log('Name:',wd.Name);
log('Age is ${wd.Age}');
