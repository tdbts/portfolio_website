var React = require('react'), 
	NavEmailModal = require('./NavEmailModal');

var NavbarRight = React.createClass({
	render: function () {
		var iconStyle = {fontSize: "1.6em"};

		return (
			<ul className="nav navbar-nav navbar-right">
				<NavEmailModal iconStyle={iconStyle} />
				<li><a href="#" id="twitter_icon" className="link_icon"><span className="fa fa-twitter fa-2x bar-icon" style={iconStyle} data-toggle="tooltip" data-placement="bottom" title="Twitter"></span></a></li>
				<li><a href="#" id="github_icon" className="link_icon"><span className="fa fa-github fa-2x bar-icon" style={iconStyle} data-toggle="tooltip" data-placement="bottom" title="Github"></span></a></li>
			</ul>			
		);
	}
});

module.exports = NavbarRight;
