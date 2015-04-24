var React = require('react'), 
	Navbar = require('./Navbar'), 
	NavbarContent = require('./NavbarContent');

$(document).ready(function() {
	var content = <NavbarContent />;

	React.render(<Navbar brand="tdbts" content={content} />, document.getElementById('page_wrapper'));

	// React.render(<Navbar brand="tdbts" />, document.getElementById('page_wrapper'));

});