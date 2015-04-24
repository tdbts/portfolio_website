var React = require('react'), 
	NavEmailModal = require('./NavEmailModal');

var NavbarRight = React.createClass({displayName: "NavbarRight",
	render: function () {
		var iconStyle = {fontSize: "1.6em"};

		return (
			React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
				React.createElement(NavEmailModal, {iconStyle: iconStyle}), 
				React.createElement("li", null, React.createElement("a", {href: "#", id: "twitter_icon", className: "link_icon"}, React.createElement("span", {className: "fa fa-twitter fa-2x bar-icon", style: iconStyle, "data-toggle": "tooltip", "data-placement": "bottom", title: "Twitter"}))), 
				React.createElement("li", null, React.createElement("a", {href: "#", id: "github_icon", className: "link_icon"}, React.createElement("span", {className: "fa fa-github fa-2x bar-icon", style: iconStyle, "data-toggle": "tooltip", "data-placement": "bottom", title: "Github"})))
			)			
		);
	}
});

module.exports = NavbarRight;
