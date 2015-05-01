var React = require('react'), 
	LandingPageHeader = require('./LandingPageHeader');

var PortfolioPageContent = React.createClass({displayName: "PortfolioPageContent",
	getInitialState: function () {
		return {
			currentPageView: this.determineViewToRender()
		};
	}, 

	determineViewToRender: function () {
		var viewToRender;
		
		var views = {
			home: {
				path: '/', 
				component: React.createElement(LandingPageHeader, null)
			}
		};

		for (var view in views) {
			if (window.location.pathname === views[view].path) {
				viewToRender = views[view].component;
			}		
		}

		return viewToRender;
	}, 

	render: function () {
		return (
			React.createElement("div", {className: "fullHeightWidth"}, 
				this.state.currentPageView
			)
		);
	}
});

module.exports = PortfolioPageContent;
