var React = require('react'), 
	LandingPageElements = require('./LandingPageElements');

var LandingPage = React.createClass({displayName: "LandingPage",

	getStyles: function () {
		return {
			top: {
				background: "url('/images/NY_basketball_ct_OPTIMIZED.jpg') no-repeat center center scroll"
			}
		};
	}, 

	render: function () {
		return (
			React.createElement("header", {id: "top", className: "header fullHeightWidth", style: this.getStyles().top}, 
				React.createElement(LandingPageElements, null)
			)
		);
	}
});

module.exports = LandingPage;
