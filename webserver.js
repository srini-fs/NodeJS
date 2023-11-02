// 1 - Import the http core module
var http = require('http');

// 2 - Create the server and handle incoming requests
var server = http.createServer(function (req, res) {
    // Set the response header with a 200 status code and text/plain content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response
    res.end('Hello, World!\n');
});

// 3 - Listen for incoming requests on port 8080
server.listen(8080);

console.log('Node.js web server at port 8080 is running...');