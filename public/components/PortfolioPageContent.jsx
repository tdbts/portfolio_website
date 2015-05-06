var React = require('react'), 
	LandingPage = require('./LandingPage'), 
	AcknowledgementsPage = require('./AcknowledgementsPage'), 
	ContactPage = require('./ContactPage');

var PortfolioPageContent = React.createClass({
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
				component: <LandingPage />
			}, 
			acknowledgements: {
				path: '/about/acknowledgements/', 
				component: <AcknowledgementsPage />
			}, 
			contact: {
				path: '/contact/', 
				component: <ContactPage />
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
			<div className="fullHeightWidth">
				{this.state.currentPageView}
			</div>
		);
	}
});

module.exports = PortfolioPageContent;
