var React = require('react');

var AcknowledgementsNav = React.createClass({displayName: "AcknowledgementsNav",

	getNavMenuItems: function (menuOptions) {
		var navListItems = menuOptions.map(function (itemOptionObj, index) {
			return (
				React.createElement("li", {key: index, className: "list-group-item"}, 
					React.createElement("a", {href: "#" + itemOptionObj.href}, itemOptionObj.text)
				)
			);
		});

		return navListItems;
	}, 

	render: function () {
		return (
			React.createElement("div", {id: "target_nav", className: "col-md-3 nav"}, 
				React.createElement("ul", {className: "nav list-group"}, 
					this.getNavMenuItems(this.props.menuOptions)
				)
			)
		);
	}
});

module.exports = AcknowledgementsNav;
