var React = require('react'), 
	NavListItem = require('./NavListItem'), 
	NavListItemDropdown = require('./NavListItemDropdown');

var NavbarNav = React.createClass({displayName: "NavbarNav",
	render: function () {
		var aboutLinks = [
				{text: "Bio", active: false}, 
				{text: "Resume", active: false}, 
				{text: "Acknowledgements", active: true, href: "/about/acknowledgements/"}
			], 
			portfolioLinks = [
				{text: "Tweet Cloud", active: true, href: "/portfolio/tag_cloud"}, 
				{text: "Project 2", active: false}, 
				{text: "Project 3", active: false}
			];

		return (
			React.createElement("ul", {className: "nav navbar-nav"}, 
				React.createElement(NavListItem, {classString: "navbar_nav_list_item", href: "/", linkText: "Home"}), 
				React.createElement(NavListItemDropdown, {classString: "text_link navbar_nav_list_item", linkText: "About", links: aboutLinks}), 
				React.createElement(NavListItemDropdown, {classString: "text_link navbar_nav_list_item", linkText: "Portfolio", links: portfolioLinks}), 
				React.createElement(NavListItem, {classString: "navbar_nav_list_item", href: "/contact/", linkText: "Contact"})
			)			
		);
	}
});

module.exports = NavbarNav;
