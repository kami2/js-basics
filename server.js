import {mockup_json} from "./mockup";

const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    switch (req.url) {
        case '/':
            res.writeHead(200);
            res.end('{"message": "Hello World!"}');
            break
        case '/data':
            res.writeHead(200);
            res.end(mockup_json);
            break
    }
};

const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
    console.log(`Server is running on https://${hostname}:${port}`);
});