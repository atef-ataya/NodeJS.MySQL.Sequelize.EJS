const http = require('http');

const express = require('express');

const app = express(); //request handler

const server = http.createServer(app);

server.listen(3000);