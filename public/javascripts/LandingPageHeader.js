var React = require('react');

var LandingPageHeader = React.createClass({displayName: "LandingPageHeader",
	render: function () {
		return (
			React.createElement("header", {id: "top", className: "header fullHeightWidth"}, 
				React.createElement("div", {id: "landing_page_elements_container", className: "container"}, 	
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-md-2"}), 
						React.createElement("div", {className: "col-md-8"}, 
							React.createElement("div", {id: "name_container"}, 
								React.createElement("h1", {id: "myName"}, "Vinny Sanchez")
							), 
							React.createElement("div", {id: "career_description_container"}, 
								React.createElement("h4", {id: "careerDescription", className: "lead"}, React.createElement("strong", null, React.createElement("kbd", null, "Web Development / Data Makeover Artist")))
							), 
							React.createElement("div", {id: "welcome_button_container"}, 
								React.createElement("a", {href: "#", className: "btn btn-success btn-lg", id: "welcomeButton"}, "More Info")
							)
						), 
						React.createElement("div", {className: "col-md-2"})
					)
				)
			)
		);
	}
});

module.exports = LandingPageHeader;
