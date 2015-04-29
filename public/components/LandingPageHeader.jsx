var React = require('react');

var LandingPageHeader = React.createClass({
	render: function () {
		return (
			<header id="top" className="header fullHeightWidth">
				<div id="landing_page_elements_container" className="container">	
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<div id="name_container">
								<h1 id="myName">Vinny Sanchez</h1>
							</div>
							<div id="career_description_container">
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
