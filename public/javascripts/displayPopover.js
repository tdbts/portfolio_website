var $ = window.jQuery || require('jquery'); 

module.exports = function (selector) {
	$('#' + selector)
		.addClass('highlighted_tab')
		.popover('show'); 

		setTimeout(function() {
			$('#' + selector)
				.removeClass('highlighted_tab')
				.popover('hide');
		}, 2500);			
};
