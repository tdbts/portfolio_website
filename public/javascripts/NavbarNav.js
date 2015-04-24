var React = require('react'), 
	NavListItem = require('./NavListItem');

var NavbarNav = React.createClass({displayName: "NavbarNav",
	render: function () {
		return (
			React.createElement("ul", {className: "nav navbar-nav"}, 
				React.createElement(NavListItem, {classString: "", href: "/", linkText: "Home"}), 
				React.createElement("li", {className: "dropdown"}, React.createElement("a", {href: "#", className: "dropdown-toggle text_link", "data-toggle": "dropdown"}, "About ", React.createElement("span", {className: "caret"})), 
					React.createElement("ul", {className: "dropdown-menu"}, 
						React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("em", null, "Bio"))), 
						React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("em", null, "Resume"))), 
						React.createElement("li", null, React.createElement("a", {href: "/about/acknowledgements/"}, "Acknowledgements"))
					)
				), 
				React.createElement("li", null, React.createElement("a", {href: "#", className: "dropdown-toggle text_link", "data-toggle": "dropdown"}, "Portfolio ", React.createElement("span", {className: "caret"})), 
					React.createElement("ul", {className: "dropdown-menu"}, 
						React.createElement("li", null, React.createElement("a", {href: "/portfolio/tag_cloud/"}, "Tweet Cloud")), 
						React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("em", null, "Project 2"))), 
						React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("em", null, "Project 3")))
					)
				), 
				React.createElement(NavListItem, {classString: "", href: "/contact/", linkText: "Contact"})
			)			
		);
	}
});

module.exports = NavbarNav;
