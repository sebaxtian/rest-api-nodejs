// CommonJs
const express = require('express');
const path = require('path');
const app = express();
const port = 1988;

const server = require('http').createServer(app);

app.get('/', (reques, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(port, () => {
    console.log('Servidor ejecutandose en puerto: ', port);
});
