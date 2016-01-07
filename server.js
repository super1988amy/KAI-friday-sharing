var http = require('http');

var server = http.createServer(function(request, response){
  console.log('Connection');
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('Hello, World.');
  response.end();
});

server.listen(8001);
