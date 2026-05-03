// app.js
const http = require('http');

const version = process.env.VERSION || "Blue Version";

http.createServer((req, res) => {
    res.end(`Hello from ${version}`);
}).listen(3000);
