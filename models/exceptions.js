'use strict';

var request = require('request');

/**
 * Get exceptions from the pub/sub server
 * @param {Function} callback
 */
exports.get = function(callback) {
	request('http://localhost:1337/exception', function(err, response, body){
		callback(err, JSON.parse(body));
	});
};
