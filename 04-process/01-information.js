#!/usr/bin/node
const log = console.log;

log('CPU:',process.arch);
log('OS:',process.platform);
log('PID:',process.pid);
log('execPath:',process.execPath);
log('node.js ver:',process.version);
log('uid:',process.getuid());
log('gid',process.getgid());

/*
 *    process.stdin.on('data',function(data){
 *        log(data);
 *           })
 *            

 *    })
 *    
 */
