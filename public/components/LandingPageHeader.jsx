var React = require('react');

var LandingPageHeader = React.createClass({
	getStyles: function () {
		return {
			top: {
				background: "url('/images/NY_basketball_ct_OPTIMIZED.jpg') no-repeat center center scroll"
			}, 

			landingPageElementsContainer: {
				textAlign: "center", 
				position: "relative", 
				height: "200px", 
				top: "30%"
			}, 

			myName: {
				fontFamily: "'Impact', 'Palatino Linotype', 'Book Antiqua', Palatino, serif", 
				letterSpacing: "5px", 
				fontSize: "6em", 
				textShadow: "1px 1px #797979"
			}, 

			careerDescriptionContainer: {
				marginBottom: "20px"
			}			
		};
	}, 

	render: function () {
		return (
			<header id="top" className="header fullHeightWidth" style={this.getStyles().top}>
				<div id="landing_page_elements_container" className="container" style={this.getStyles().landingPageElementsContainer}>	
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<div id="name_container">
								<h1 id="myName" style={this.getStyles().myName}>Vinny Sanchez</h1>
							</div>
							<div id="career_description_container" style={this.getStyles().careerDescriptionContainer}>
								<h4 id="careerDescription" className="lead"><strong><kbd>Web Development / Data Makeover Artist</kbd></strong></h4>
							</div>
							<div id="welcome_button_container">
								<a href="#" className="btn btn-success btn-lg" id="welcomeButton">More Info</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
});

module.exports = LandingPageHeader;
