const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile('temp.txt', function(err, data) {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        console.log(data.toString());
        return res.end();
    });
});

server.listen(6002);