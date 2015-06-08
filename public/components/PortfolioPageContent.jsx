var React = require('react'), 
	LandingPage = require('./LandingPage'), 
	AcknowledgementsPage = require('./AcknowledgementsPage'), 
	ContactPage = require('./ContactPage'), 
	TweetCloud = require('./TweetCloud');

var PortfolioPageContent = React.createClass({
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
			}, 
			tweetCloud: {
				path: '/portfolio/tag_cloud/', 
				component: <TweetCloud />
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
			<div id="#page_component_anchor" className="fullHeightWidth">
				{this.determineViewToRender()}
			</div>
		);
	}
});

module.exports = PortfolioPageContent;
