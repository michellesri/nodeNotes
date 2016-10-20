var http = require('http');
var fs = require('fs');

http.createServer((req,res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var read_stream = fs.createReadStream('text.txt');
  read_stream.on('data', writeCallback);
  read_stream.on('close', closeCallback);

  function writeCallback(data){
    res.write(data);
  }

  function closeCallback(){
    res.end();
  }
}).listen(8080);

console.log('server start on 8080');
