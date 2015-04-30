var React = require('react');

var LandingPageHeader = React.createClass({displayName: "LandingPageHeader",
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
			React.createElement("header", {id: "top", className: "header fullHeightWidth", style: this.getStyles().top}, 
				React.createElement("div", {id: "landing_page_elements_container", className: "container", style: this.getStyles().landingPageElementsContainer}, 	
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-md-8 col-md-offset-2"}, 
							React.createElement("div", {id: "name_container"}, 
								React.createElement("h1", {id: "myName", style: this.getStyles().myName}, "Vinny Sanchez")
							), 
							React.createElement("div", {id: "career_description_container", style: this.getStyles().careerDescriptionContainer}, 
								React.createElement("h4", {id: "careerDescription", className: "lead"}, React.createElement("strong", null, React.createElement("kbd", null, "Web Development / Data Makeover Artist")))
							), 
							React.createElement("div", {id: "welcome_button_container"}, 
								React.createElement("a", {href: "#", className: "btn btn-success btn-lg", id: "welcomeButton"}, "More Info")
							)
						)
					)
				)
			)
		);
	}
});

module.exports = LandingPageHeader;
