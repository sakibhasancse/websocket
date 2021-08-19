const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

dotenv.config();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

setInterval(() => {
    io.emit('image', 'some data');
}, 1000)

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log('listening on port' + PORT);
})
