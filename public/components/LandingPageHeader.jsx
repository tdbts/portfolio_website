var React = require('react');

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

	addButtonTextTransition: function () {
		$('.buttonHoverFade').hover(
			function () {
				$(this).find('a').css({color: "#333"});
			}, 
			function () {
				$(this).find('a').css({color: "#e1e1e1"})
			}
		);		
	}, 

	addTransitionsToButton: function () {
		var domNode = React.findDOMNode(this);

		this.addClassToDOMNode('#welcomeButton', 'buttonHoverFade');
		this.addClassToDOMNode('#welcomeButtonLink', 'buttonTextFade');

		this.addButtonTextTransition();		
	}, 

	componentDidMount: function () {
		window.addEventListener('resize', this.handleResize);

		this.addTransitionsToButton();		
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
			}, 

			nameContainer: {
				display: "inline-block"
			},

			myName: {
				fontFamily: "'Impact', 'Palatino Linotype', 'Book Antiqua', Palatino, serif", 
				letterSpacing: "5px", 
				fontSize: "6em", 
				textShadow: "1px 1px #797979", 
				borderBottom: "1px solid black"
			}, 

			careerDescriptionContainer: {
				marginBottom: "20px"
			}, 

			careerDescription: {
				fontSize: "1.75em",
				letterSpacing: "3px",  
				color: "#e1e1e1", 
				textShadow: "2px 2px #2b2b2b", 
				marginTop: "10px"
			}, 

			welcomeButton: {
				opacity: "0.8", 
				border: "1px solid #000"
			}
		};
	}, 

	render: function () {
		return (
			<header id="top" className="header fullHeightWidth" style={this.getStyles().top}>
				<div id="landing_page_elements_container" className="container" style={this.getStyles().landingPageElementsContainer}>	
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<div id="name_container" style={this.getStyles().nameContainer}>
								<h1 id="myName" style={this.getStyles().myName}>Vinny Sanchez</h1>
							</div>
							<div id="career_description_container" style={this.getStyles().careerDescriptionContainer}>
								<h1 id="careerDescription" className="lead" style={this.getStyles().careerDescription}>Web Development / Data Makeover Artist</h1>
							</div>
							<div id="welcome_button_container">
								<button className="btn btn-lg" id="welcomeButton" style={this.getStyles().welcomeButton}>
									<a href="#" id="welcomeButtonLink">More Info</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
});

module.exports = LandingPageHeader;
