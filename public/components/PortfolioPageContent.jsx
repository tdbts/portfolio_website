var React = require('react'), 
	LandingPageHeader = require('./LandingPageHeader');

var PortfolioPageContent = React.createClass({
	getInitialState: function () {
		return {
			currentPageView: this.determineViewToRender()
		}
	}, 

	determineViewToRender: function () {
		var viewToRender;
		
		var views = {
			home: {
				path: '/', 
				component: <LandingPageHeader />
			}
		};

		for (var view in views) {
			if (window.location.pathname === views[view]['path']) {
				viewToRender = views[view]['component'];
			}
		}

		return viewToRender;
	}, 

	render: function () {
		return (
			<div className="fullHeightWidth">
				{this.state.currentPageView}
			</div>
		);
	}
});

module.exports = PortfolioPageContent;
