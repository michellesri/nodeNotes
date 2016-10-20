// non-blocking code

var http = require('http');
var url = require('url');
var cp = require('child_process');

function onRequest(req, res){
  var pathname = url.parse(req.url).pathname;
  if(pathname === '/wait'){
    cp.exec('node block.js', myCallback);
  } else{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello\n');
    res.end();
  }

  console.log('new connection');

  function myCallback(){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('thanks for waiting\n');
    res.end();
  }
}

http.createServer(onRequest).listen(8080);
console.log('server started on port 8080');


// blocking code:
//
// var http = require('http');
// var url = require('url');
//
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//
//   if( url.parse(request.url).pathname == '/wait' ){
//     var startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + 15000);
//     response.write('Thanks for waiting!');
//   }
//   else{
//     response.write('Hello!');
//   }
//
//   response.end();
// }).listen(8080);
//
// console.log('Server started');
