var React = require('react'), 
	LandingPageElements = require('./LandingPageElements'), 
	WelcomeModal = require('./WelcomeModal');

var LandingPage = React.createClass({

	getStyles: function () {
		return {
			top: {
				background: "url('/images/NY_basketball_ct_OPTIMIZED.jpg') no-repeat center center scroll"
			}
		};
	}, 

	render: function () {
		return (
			<header id="top" className="header fullHeightWidth" style={this.getStyles().top}>
				<LandingPageElements />
				<WelcomeModal handleHiddenWelcomeModal={this.props.handleHiddenWelcomeModal} />
			</header>
		);
	}
});

module.exports = LandingPage;
