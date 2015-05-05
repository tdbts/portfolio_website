var React = require('react'), 
	LandingPage = require('./LandingPage'), 
	Acknowledgements = require('./Acknowledgements'); 

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
				component: <Acknowledgements />
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
