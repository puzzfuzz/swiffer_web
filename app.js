'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var subSocket = require('./lib/subscribe');
var exceptions = require('./models/exceptions');

server.listen(3000, function() {
	console.log('Server is running on port %d', 3000);
});

/**
 * Serve static assets out of public
 */
app.use(express.static('public'));


app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});

io.sockets.on('connection', function(socket){
	exceptions.get(function(err, data){
		if (err) return;
		data.forEach(function(exception){
			socket.emit('exception', exception);
		});
	});
});

subSocket.on('message', function(message){
	io.sockets.emit('exception', message);
});