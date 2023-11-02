const readline = require('readline');
const fs = require('fs');
const http = require('http');
const path = require('path');

const fileToRead = 'sample.txt'; // Change this to your text file's path

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
        res.end(html);
    }
});

server.listen(3001, () => {
    console.log('Server is running on http://localhost:3001/');
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    const rl = readline.createInterface({
        input: fs.createReadStream(fileToRead),
        output: process.stdout,
        terminal: false,
    });

    let lineNumber = 1;

    rl.on('line', (line) => {
        socket.emit('newLine', { lineNumber, line });
        lineNumber++;
    });

    rl.on('close', () => {
        console.log('File has been read completely.');
        socket.emit('fileCompleted');
    });
});
