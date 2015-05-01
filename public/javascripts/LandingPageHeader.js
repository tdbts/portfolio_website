var React = require('react'), 
	Name = require('./Name'), 
	CareerDescription = require('./CareerDescription'), 
	WelcomeButton = require('./WelcomeButton');

var LandingPageHeader = React.createClass({displayName: "LandingPageHeader",
	getInitialState: function () {
		return {
			windowWidth: window.innerWidth, 
			windowHeight: window.innerHeight
		};
	}, 

	handleResize: function (e) {
		this.setState({windowWidth: window.innerWidth});
	}, 

	getRefDOMNode: function (ref) {
		
		return React.findDOMNode(this.refs[ref]);
	}, 	

	addClassToDOMNode: function (selector, classToAdd) {
		var domNode = React.findDOMNode(this);

		$(domNode).find(selector).addClass(classToAdd);
	}, 

	animateCareerDescription: function () {
		var self = this,
			descriptionLeft = $(this.getRefDOMNode('careerDescription')).find('#descriptionLeft'), 
			descriptionRight = $(this.getRefDOMNode('careerDescription')).find('#descriptionRight');

		$(descriptionRight).css({position: "relative"});
		$(React.findDOMNode(this)).find('#landing_page_elements_container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$(descriptionLeft).animate({left: "0px"});
			$(descriptionRight).animate({right: "0px"});
		});		
	}, 

	startAnimation: function () {
		this.addClassToDOMNode('#landing_page_elements_container', 'customizedAnimation');
	
		this.animateCareerDescription();
	}, 

	componentDidMount: function () {
		window.addEventListener('resize', this.handleResize);

		this.startAnimation();		
	}, 

	componentWillUnmount: function () {
		window.removeEventListener('resize', this.handleResize);
	}, 

	getStyles: function () {
		return {
			top: {
				background: "url('/images/NY_basketball_ct_OPTIMIZED.jpg') no-repeat center center scroll"
			}, 

			landingPageElementsContainer: {
				textAlign: "center", 
				position: "relative", 
				height: "200px", 
				top: this.state.windowHeight < 500 ? "5%" : 
					this.state.windowWidth < 621 ? "15%" : "30%"
			}
		};
	}, 

	render: function () {
		return (
			React.createElement("header", {id: "top", className: "header fullHeightWidth", style: this.getStyles().top}, 
				React.createElement("div", {id: "landing_page_elements_container", className: "container animated bounceInDown", style: this.getStyles().landingPageElementsContainer}, 	
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-md-8 col-md-offset-2"}, 
							React.createElement(Name, null), 
							React.createElement(CareerDescription, {ref: "careerDescription"}), 
							React.createElement(WelcomeButton, null)
						)
					)
				)
			)
		);
	}
});

module.exports = LandingPageHeader;
