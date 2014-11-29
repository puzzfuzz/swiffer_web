'use strict';

$(function(){
	var socket = io.connect();

	socket.on('badge', function(badge){

		var $badge = $('<div>'+badge.badge_id+'</div>');
		$('.badge-wrapper').prepend($badge);
	});
});