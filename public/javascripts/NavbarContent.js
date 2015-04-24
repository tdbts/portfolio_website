var React = require('react'), 
	NavbarNav = require('./NavbarNav'), 
	NavbarRight = require('./NavbarRight');

var NavbarContent = React.createClass({displayName: "NavbarContent",
	render: function () {
		return (
			React.createElement("div", {id: "navbar_content"}, 
				React.createElement(NavbarNav, null), 
				React.createElement(NavbarRight, null)			
			)
		);
	}
});

module.exports = NavbarContent;
