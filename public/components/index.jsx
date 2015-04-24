var React = require('react'),  
	LandingPageHeader = require('./LandingPageHeader');

$(document).ready(function() {

	React.render(<LandingPageHeader />, document.getElementById('page_content_wrapper'));
});