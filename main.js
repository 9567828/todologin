var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}); // 상태코드 200 == success
  res.write('hello node.js');
  console.log(__dirname);
  res.end();

}).listen(3002);