'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

socket.connect(1338);

socket.on('error', function(err){
	throw err;
});

module.exports = socket;