#!/usr/bin/node
var wd = {
  'Name':'王顶',
  'QQ':'408542507',
  'Age':43
};

const log = console.log;

log('Name:%s\t Age:%d',wd.Name,wd.Age);//字符串、整数类型
log('WangDing Info:%j',wd);//对象类型

log('Name:%s',wd.Name);//占位符输出
log('Name:',wd.Name);//逗号间隔，多变量输出
log('Name:' + wd.Name);//拼接字符串输出
log('Age is ${wd.Age}');//模板字符串输出
