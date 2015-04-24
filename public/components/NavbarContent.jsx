var React = require('react'), 
	NavbarNav = require('./NavbarNav'), 
	NavbarRight = require('./NavbarRight');

var NavbarContent = React.createClass({
	render: function () {
		var collapseDivStyle = {height: "1px"};

		return (
			<div style={collapseDivStyle} class="navbar-collapse collapse" id="myNavbar">
				<NavbarNav />
				<NavbarRight />			
			</div>
		);
	}
});

module.exports = NavbarContent;
