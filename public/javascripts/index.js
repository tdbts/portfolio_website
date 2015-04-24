var React = require('react'),  
	LandingPageHeader = require('./LandingPageHeader');

$(document).ready(function() {

	React.render(React.createElement(LandingPageHeader, null), document.getElementById('page_content_wrapper'));
});