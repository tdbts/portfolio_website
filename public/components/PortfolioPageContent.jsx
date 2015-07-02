var React = require('react'), 
	LandingPage = require('./LandingPage'), 
	AcknowledgementsPage = require('./AcknowledgementsPage'), 
	ContactPage = require('./ContactPage'), 
	TweetCloud = require('./TweetCloud'), 
	EmailModal = require('./EmailModal'), 
	ShowcasePopover = require('../javascripts/ShowcasePopover'), 
	displayPopover = require('../javascripts/displayPopover'), 
	$ = window.jQuery || require('jquery');

var PortfolioPageContent = React.createClass({ 

	getDefaultProps: function () {
		return {
			navbarListItemSelectors: [
				'about.navbar_nav_list_item',
				'portfolio.navbar_nav_list_item', 
				'contact.navbar_nav_list_item', 
				'navbar_right_icons_container'				
			]		
		};	
	},		

	activateNavbarPopovers: function () {
		
		var showcasePopovers = [], 
			popoverOptions = {
				'about.navbar_nav_list_item': {
					content: "Check out my resume or the acknowledgements for this webpage here.", 
					title: "A lil' bit about me."
				}, 
				'portfolio.navbar_nav_list_item': {
					content: "Take a look at the Tweet Cloud or the reimplementation of the NNFF webpage I'm working on.",
					title: "Some of my projects."
				}, 
				'contact.navbar_nav_list_item': {
					content: "If you'd like to get in touch with me, you can find the links to my email and various social media accounts here.",
					title: "Say hi!  I don't bite."
				}, 
				'navbar_right_icons_container': {
					content: "Want to see the code or get in touch with me now?  These icons will take you where you need to go.",
					title: "Quick links."
				}
			};

		for (var popoverOption in popoverOptions) {
			var options = popoverOptions[popoverOption]; 

			showcasePopovers.push(new ShowcasePopover(popoverOption, options.content, options.title));
		}

		showcasePopovers.forEach(function (popover) {
			popover.activate(); 
		});
	}, 

	deactivateNavbarPopovers: function () {
			
		$('.navbar_nav_list_item').popover('destroy');
	}, 

	seriallyDisplayNavbarPopovers: function (selectors, callback) {

		selectors.forEach(function (selector, index) { 
			if (index === 0) {
				displayPopover(selector);
			}

			if (selectors[index + 1]) {
				$('#' + selector).on('hidden.bs.popover', function () {
					displayPopover(selectors[index + 1]);
				});
			} 

			if (callback && typeof callback === 'function') {
				$('#' + selectors[selectors.length - 1]).on('hidden.bs.popover', function () {
					callback();
				});
			}
		});		
	}, 

	onShownCollapseMenu: function () {		
		
		$('#myNavbar').on('shown.bs.collapse', function () {
			
			this.seriallyDisplayNavbarPopovers(this.props.navbarListItemSelectors, this.removeOnShownCollapseMenu);
		
		}.bind(this));		
	}, 

	revealCollapsedNavMenu: function () {

		$('div.navbar-header button').trigger('click'); 		
	}, 

	removeOnShownCollapseMenu: function () {

		$('#myNavbar').off('shown.bs.collapse'); 		
	}, 

	showcaseNavbarPopovers: function () {
		
		if (window.innerWidth < 768 && !($('#myNavbar').hasClass('in'))) {
			
			[
				this.onShownCollapseMenu, 
				this.revealCollapsedNavMenu
			]
			.forEach(function (func) {
				func();
			});

		} else {
			this.seriallyDisplayNavbarPopovers(this.props.navbarListItemSelectors); 
		} 

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
