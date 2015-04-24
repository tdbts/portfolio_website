var React = require('react');

var NavListItemDropdown = React.createClass({displayName: "NavListItemDropdown",
	render: function () {

		var linkClassName = "dropdown-toggle " + this.props.classString;

		var menuLinks = this.props.links.map(function (obj) {
			return obj.active === true ? React.createElement("li", {key: obj.text}, React.createElement("a", {href: obj.href}, obj.text)) 
				: React.createElement("li", {key: obj.text}, React.createElement("a", {href: "#"}, React.createElement("em", null, obj.text)));
		});
		
		return (
			React.createElement("li", {className: "dropdown"}, React.createElement("a", {href: "#", className: linkClassName, "data-toggle": "dropdown"}, this.props.linkText, " ", React.createElement("span", {className: "caret"})), 
				React.createElement("ul", {className: "dropdown-menu"}, 
					menuLinks
				)
			)			
		);
	}
});

module.exports = NavListItemDropdown;
