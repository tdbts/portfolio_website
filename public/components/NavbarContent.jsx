var React = require('react'), 
	NavbarNav = require('./NavbarNav'), 
	NavbarRight = require('./NavbarRight');

var NavbarContent = React.createClass({
	render: function () {
		return (
			<div id="navbar_content">
				<NavbarNav />
				<NavbarRight />			
			</div>
		);
	}
});

module.exports = NavbarContent;
