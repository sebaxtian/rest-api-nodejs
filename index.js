// CommonJs
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const port = 1988;

const server = require('http').createServer(app);

const pollsRouter = require('./api/routers/polls-router');

app.use(morgan('dev'));

app.get('/', (reques, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

// Bodu Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/polls', pollsRouter);

server.listen(port, () => {
    console.log('Servidor ejecutandose en puerto: ', port);
});
