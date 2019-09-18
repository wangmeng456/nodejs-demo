#!/usr/bin/node
var msg=['Name','Email','QQ','Mobile'];
var usr ={}, i=0;
console.log(msg[i]+':');
process.stdin.on('data',function(data){
  usr[msg[i]]=data.slice(0,data.length-1).toString('utf8');

  if(i === 3){
    console.log(usr);
    process.exit();
  }
  else{
    console.log(msg[++i]+':');
  }
});

process.stdin.on('end',function(){
  console.log(usr);
});
