var React = require('react'), 
	NavListItem = require('./NavListItem');

var NavbarNav = React.createClass({
	render: function () {
		return (
			<ul className="nav navbar-nav">
				<NavListItem classString="" href="/" linkText="Home" />
				<li className="dropdown"><a href="#" className="dropdown-toggle text_link" data-toggle="dropdown">About <span className="caret"></span></a>
					<ul className="dropdown-menu">
						<li><a href="#"><em>Bio</em></a></li>
						<li><a href="#"><em>Resume</em></a></li>
						<li><a href="/about/acknowledgements/">Acknowledgements</a></li>
					</ul>
				</li>
				<li><a href="#" className="dropdown-toggle text_link" data-toggle="dropdown">Portfolio <span className="caret"></span></a>
					<ul className="dropdown-menu">
						<li><a href="/portfolio/tag_cloud/">Tweet Cloud</a></li>
						<li><a href="#"><em>Project 2</em></a></li>
						<li><a href="#"><em>Project 3</em></a></li>
					</ul>
				</li>
				<NavListItem classString="" href="/contact/" linkText="Contact" />
			</ul>			
		);
	}
});

module.exports = NavbarNav;
