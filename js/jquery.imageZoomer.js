(function($) {
	$.fn.imageZoomer = function() {
		$(this).hover( function(e) {
			var href=$(this).attr('src');
			$('<img id="Larger" src="' + href + '" alt="image">')
				.css("width", "40%")
				.css('top',e.pageY+10)
				.css('left',e.pageX+20)
			.appendTo('body');
		}, function() {
			$('#Larger').remove();
		});
		$(this).mousemove( function(e) {
			$('#Larger').css('top',e.pageY+10).css('left',e.pageX+20)
		});
	}
})(jQuery);