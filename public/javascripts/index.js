var React = require('react'), 
	Navbar = require('./Navbar'), 
	NavbarContent = require('./NavbarContent');

$(document).ready(function() {
	var content = React.createElement(NavbarContent, null);

	React.render(React.createElement(Navbar, {brand: "tdbts", content: content}), document.getElementById('page_wrapper'));

	// React.render(<Navbar brand="tdbts" />, document.getElementById('page_wrapper'));

});