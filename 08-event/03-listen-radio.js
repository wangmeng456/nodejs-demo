#!/usr/bin/node

const Radio = require('./03-radio'),
      log = console.log;

const station = {
  freq: '106.7',
  name: 'music radio'
};

var radio = new Radio(station);

radio.on('play', (station) => {
  log('"%s" FM %s opened!', station.name, station.freq);
  log('lalala...');
});

radio.on('stop', (station) => {
  log('"%s" FM %s closed!', station.name, station.freq);
});
