const express = require("express");
const http = require('http');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);
const connect = require('./config/databse-config');

io.on('connection',(socket)=>{
    console.log('a user connected',socket.id);  

   socket.on('msg_send',(data)=>{
        console.log(data);
        io.emit('msg_rcvd',data);
   });

   
});


app.use('/',express.static(__dirname + '/public'));

server.listen(3000,async()=>{
    console.log("Server is working");
    await connect();
    console.log("mongo db connect");
});