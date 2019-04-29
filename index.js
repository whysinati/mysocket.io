var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
  // if i'm the server 
  //console.log('listening on *10.11.6.102:3001');
});