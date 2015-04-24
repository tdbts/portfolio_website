var React = require('react');

var Navbar = React.createClass({displayName: "Navbar",
	render: function () {
		var collapseDivStyle = {height: "1px"}, 
			navStyle = {height: "52px"};

		return (
			React.createElement("nav", {className: "navbar navbar-inverse", style: navStyle}, 
				React.createElement("div", {className: "container"}, 
					React.createElement("div", {className: "navbar-header"}, 
						React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#myNavbar"}, 
							React.createElement("span", {className: "icon-bar"}), 
							React.createElement("span", {className: "icon-bar"}), 
							React.createElement("span", {className: "icon-bar"})
						), 
						React.createElement("a", {href: "#", className: "navbar-brand"}, this.props.brand)
					), 
					React.createElement("div", {style: collapseDivStyle, className: "navbar-collapse collapse", id: "myNavbar"}, 
						this.props.content
					)
				)
			)										
		);
	}
});

module.exports = Navbar;
