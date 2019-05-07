var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'}); ///write a response to the client
//   res.write(req.url);
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end(); ////end the response
// }).listen(8080); ////the server object listens on port 8080

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);