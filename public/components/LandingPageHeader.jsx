var React = require('react'), 
	Name = require('./Name'), 
	CareerDescription = require('./CareerDescription'), 
	WelcomeButton = require('./WelcomeButton');

var LandingPageHeader = React.createClass({
	getInitialState: function () {
		return {
			windowWidth: window.innerWidth, 
			windowHeight: window.innerHeight
		};
	}, 

	handleResize: function (e) {
		this.setState({windowWidth: window.innerWidth});
	}, 

	addClassToDOMNode: function (selector, classToAdd) {
		var domNode = React.findDOMNode(this);

		$(domNode).find(selector).addClass(classToAdd);
	}, 

	animateCareerDescription: function () {
		var self = this,
			descriptionNode = $(React.findDOMNode(this.refs.careerDescription)).find('#careerDescription');

		$(React.findDOMNode(this)).find('#landing_page_elements_container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			self.addClassToDOMNode(descriptionNode, 'animated tada customizedAnimationCareerDescription');
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
			<header id="top" className="header fullHeightWidth" style={this.getStyles().top}>
				<div id="landing_page_elements_container" className="container animated bounceInDown" style={this.getStyles().landingPageElementsContainer}>	
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<Name />
							<CareerDescription ref="careerDescription" />
							<WelcomeButton />
						</div>
					</div>
				</div>
			</header>
		);
	}
});

module.exports = LandingPageHeader;
