var React = require('react'),  
	PortfolioPageContent = require('./PortfolioPageContent');

$(document).ready(function() {

		React.render(<PortfolioPageContent />, document.getElementById('page_content_wrapper'));
});
