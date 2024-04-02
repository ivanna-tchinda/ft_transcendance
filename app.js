const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;

const server = http.createServer(function(req, res) {
    let filePath = '.' + req.url;

    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
    }[extname] || 'application/octet-stream';

    fs.readFile(filePath, 'utf-8', function(error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404);
                res.end('Error: File Not Found');
            } else {
                res.writeHead(500);
                res.end('Error: Internal Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, function(error) {
    if (error) {
        console.log("Something went wrong", error);
    } else {
        console.log('Server running at http://localhost:8000');
    }
});
