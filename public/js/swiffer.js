'use strict';

$(function(){
	var socket = io.connect();

	socket.on('exception', function(exception){
		var $exception = $('<div>'+exception.errorMessage+'</div>');
		if (exception.when) {
			$exception.append('<div>'+exception.when+'</div>');
		}
		if (exception.trace) {
			$exception.append('<pre>'+ exception.trace +'</pre>');
		}
		$('.badge-wrapper').prepend($exception);
	});
});