const debug = require('debug')
const http = require('http')

const debugHTTP = debug('HTTP')
const debugBoot = debug('BOOT')

// fake app

debugBoot('booting app...');

http.createServer(function(req, res){
  debugHTTP(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(3000, function(){
  debugHTTP('start listening');
});
