#!/usr/bin/node

const fs = require('fs'),
      pfile = process.argv[2],
      filename = process.argv[3],
      log = console.log;

try{
  switch(pfile){
    case 'list':
      var fileList = [];
      var dirname = fs.readdirSync(__dirname);
      for(var i = 0; i < dirname.length; i++){
        var obj = {
          'fileName':dirname[i],
          'fileSize':fs.statSync(dirname[i]).size
        };
        fileList.push(obj);
      }
      log(fileList);
      break;
    case 'mkdir':
      if(typeof(filename) === 'undefined'){
        console.error('命令行参数错误');
        process.exit(1);
      }
      fs.mkdirSync(filename);
      break;
    default:
      log('命令行参数错误');
  }
}catch(err){
  console.error(err.message);
  process.exit(1);
}
