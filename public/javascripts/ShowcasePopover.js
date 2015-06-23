var $ = window.jQuery || require('jquery');

function ShowcasePopover(selector, content, title) {
	this.selector = selector; 
	this.options = {
		content: content, 
		title: title, 
		placement: 'bottom', 
		trigger: 'manual'
	};
}

ShowcasePopover.prototype.activate = function () {
	$('#' + this.selector).popover(this.options);
}; 

module.exports = ShowcasePopover;
