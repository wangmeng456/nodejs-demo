#!/usr/bin/node

const http = require('http'),
      city = process.argv[2] || '石家庄',
      log = console.log;

var addr = 'http://v.juhe.cn/weather/index?cityname=' + city + '&key=70b20823f67b5f0ca3358b796fd83260';

http.get(global.encodeURI(addr), function(res) {

  //print start line
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

  //print response header
  log(res.headers);
  log('');

  //print response body
  var weather = '';

  res.on('data', function(data) {
    weather += data.toString('utf8');
  });

  res.on('end', function() {
    weather = JSON.parse(weather);
    log(weather.result.today.temperature);
  });
});
