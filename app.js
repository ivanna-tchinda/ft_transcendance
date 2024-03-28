// Import the http module
const http = require('http');
const fs = require('fs');
const port = 3000;

// Create a server object
const server = http.createServer(function(req, res){
  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./index.html', 'utf-8', function(error, data){
    if(error)
    {
      res.writeHead(404);
      res.write('Error: File Not Found')
    }
    else
      res.write(data);
    res.end()
  })
});

// Listen on port 3000
server.listen(port, function(error) {
  if(error)
    console.log("Something went wrong", error)
  else
    console.log('Server running at http://localhost:3000');
});

