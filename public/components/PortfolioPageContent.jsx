var React = require('react'), 
	LandingPage = require('./LandingPage'), 
	AcknowledgementsPage = require('./AcknowledgementsPage'), 
	ContactPage = require('./ContactPage'), 
	TweetCloud = require('./TweetCloud'), 
	EmailModal = require('./EmailModal');

var PortfolioPageContent = React.createClass({
	activateNavbarPopovers: function () {
		
		$('#about.navbar_nav_list_item').popover({
			content: "Check out my resume or the acknowledgements for this webpage here.",
			title: "A lil' bit about me.", 
			placement: 'bottom', 
			trigger: 'manual', 
			delay: {'show': 2000, 'hide': 2000}
		}); 

		$('#portfolio.navbar_nav_list_item').popover({
			content: "Take a look at the Tweet Cloud or the reimplementation of the NNFF webpage I'm working on.",
			title: "Some of my projects.", 
			placement: 'bottom', 
			trigger: 'manual', 
			delay: {'hide': 2000}
		}); 		

		$('#contact.navbar_nav_list_item').popover({
			content: "If you'd like to get in touch with me, you can find the links to my email and various social media accounts here.",
			title: "Say hi!  I don't bite.", 
			placement: 'bottom', 
			trigger: 'manual', 
			delay: {'hide': 2000}
		}); 

		$('#navbar_right_icons_container').popover({
			content: "Want to see the code or get in touch with me now?  These icons will take you where you need to go.",
			title: "Quick links.", 
			placement: 'bottom', 
			trigger: 'manual', 
			delay: {'hide': 2000}
		}); 
	}, 

	deactivateNavbarPopovers: function () {
			
		$('.navbar_nav_list_item').popover('destroy');
	}, 

	showcaseNavbarPopovers: function () {
		console.log("SHOWCASING NAVBAR POPOVERS.");
		$('#about.navbar_nav_list_item')
			.addClass('highlighted_tab')
			.popover('show');

		setTimeout(function() {
			$('#about.navbar_nav_list_item')
				.removeClass('highlighted_tab')
				.popover('hide');
		}, 2500);

		$('#about.navbar_nav_list_item').on('hidden.bs.popover', 
			function () {
				console.log("STEP TWO OF SHOWCASE.");
				 $('#portfolio.navbar_nav_list_item')
					.addClass('highlighted_tab')
					.popover('show');

				setTimeout(function() {
					$('#portfolio.navbar_nav_list_item')
						.removeClass('highlighted_tab')
						.popover('hide');
				}, 2500);
			});

		$('#portfolio.navbar_nav_list_item').on('hidden.bs.popover', 
			function () {
				console.log("STEP THREE OF SHOWCASE.");
				$('#contact.navbar_nav_list_item')
					.addClass('highlighted_tab')
					.popover('show');

				setTimeout(function() {
					$('#contact.navbar_nav_list_item')
						.removeClass('highlighted_tab')
						.popover('hide');
				}, 2500);
			});

		$('#contact.navbar_nav_list_item').on('hidden.bs.popover', 
			function () {
				console.log("STEP FOUR OF SHOWCASE.");
				$('#navbar_right_icons_container')
					.addClass('highlighted_tab')
					.popover('show');

				setTimeout(function() {
					$('#navbar_right_icons_container')
						.removeClass('highlighted_tab')
						.popover('hide');
				}, 2500);
			});

	}, 

	determineViewToRender: function () {
		var viewToRender;
		
		var views = {
			home: {
				path: '/', 
				component: <LandingPage handleHiddenWelcomeModal={this.showcaseNavbarPopovers} />
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

	componentDidMount: function () {
		
		this.activateNavbarPopovers();
	}, 

	componentWillUnmount: function () {
		
		this.deactivateNavbarPopovers();
	}, 

	render: function () {

		return (
			<div id="#page_component_anchor" className="fullHeightWidth">
				{this.determineViewToRender()}
				<EmailModal />
			</div>
		);
	}
});

module.exports = PortfolioPageContent;
