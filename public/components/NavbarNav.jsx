var React = require('react'), 
	NavListItem = require('./NavListItem'), 
	NavListItemDropdown = require('./NavListItemDropdown');

var NavbarNav = React.createClass({
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
			<ul className="nav navbar-nav">
				<NavListItem classString="navbar_nav_list_item" href="/" linkText="Home" />
				<NavListItemDropdown classString="text_link navbar_nav_list_item" linkText="About" links={aboutLinks} />
				<NavListItemDropdown classString="text_link navbar_nav_list_item" linkText="Portfolio" links={portfolioLinks} />
				<NavListItem classString="navbar_nav_list_item" href="/contact/" linkText="Contact" />
			</ul>			
		);
	}
});

module.exports = NavbarNav;
