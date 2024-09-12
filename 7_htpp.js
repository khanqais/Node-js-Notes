const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html'); 
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Here is a short history');
    } else {
        res.end(`
            <h2>Oops</h2>
            <a href="/">Back home</a>
        `);
    }
});

server.listen(5000);
