var React = require('react'),  
	PortfolioPageContent = require('./PortfolioPageContent');

$(document).ready(function() {

		React.render(React.createElement(PortfolioPageContent, null), document.getElementById('page_content_wrapper'));
});
