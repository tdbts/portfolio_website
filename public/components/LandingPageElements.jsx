var React = require('react'), 
	Name = require('./Name'), 
	CareerDescription = require('./CareerDescription'), 
	WelcomeButton = require('./WelcomeButton');

var LandingPageHeader = React.createClass({
	getInitialState: function () {
		return {
			windowWidth: window.innerWidth, 
			windowHeight: window.innerHeight, 
			headerClassString: "container animated bounceInDown"
		};
	}, 

	getStyles: function () {
		return {
			landingPageElementsContainer: {
				textAlign: "center", 
				position: "relative", 
				height: "200px", 
				top: this.state.windowHeight < 500 ? "10%" : 
					this.state.windowWidth < 621 ? "15%" : "30%"
			}
		};
	}, 

	handleResize: function (e) {
		this.setState({windowWidth: window.innerWidth});
	}, 

	getRefDOMNode: function (ref) {
		
		return React.findDOMNode(this.refs[ref]);
	}, 	

	animateCareerDescription: function () {
		var self = this,
			descriptionLeft = $(this.getRefDOMNode('careerDescription')).find('#descriptionLeft'), 
			descriptionRight = $(this.getRefDOMNode('careerDescription')).find('#descriptionRight');

		$(descriptionRight).css({position: "relative"});
		
		$(React.findDOMNode(this)).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$(descriptionLeft).animate({left: "0px"});
			$(descriptionRight).animate({right: "0px"});
		});		
	}, 

	startAnimation: function () {
		// Prefixes cannot be added to inline CSS
		this.setState({headerClassString: this.state.headerClassString + " customizedAnimation"});
	
		this.animateCareerDescription();
	}, 

	componentDidMount: function () {
		window.addEventListener('resize', this.handleResize);

		this.startAnimation();		
	}, 

	componentWillUnmount: function () {
		window.removeEventListener('resize', this.handleResize);
	}, 


	render: function () {
		return (
			<div id="landing_page_elements_container" className={this.state.headerClassString} style={this.getStyles().landingPageElementsContainer}>	
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<Name />
						<CareerDescription ref="careerDescription" />
						<WelcomeButton />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = LandingPageHeader;
