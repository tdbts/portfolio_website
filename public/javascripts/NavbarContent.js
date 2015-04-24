var React = require('react'), 
	NavbarNav = require('./NavbarNav'), 
	NavbarRight = require('./NavbarRight');

var NavbarContent = React.createClass({displayName: "NavbarContent",
	render: function () {
		var collapseDivStyle = {height: "1px"};

		return (
			React.createElement("div", {style: collapseDivStyle, class: "navbar-collapse collapse", id: "myNavbar"}, 
				React.createElement(NavbarNav, null), 
				React.createElement(NavbarRight, null)			
			)
		);
	}
});

module.exports = NavbarContent;
