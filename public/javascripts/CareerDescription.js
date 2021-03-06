var React = require('react');

var CareerDescription = React.createClass({displayName: "CareerDescription",
	
	getStyles: function () {
		return {
			careerDescriptionContainer: {
				marginBottom: "20px"
				// , 
				// height: "50px"
			}, 

			careerDescription: {
				fontSize: "1.75em",
				letterSpacing: "3px",  
				color: "#e1e1e1", 
				textShadow: "8px 7px 10px #2b2b2b", 
				marginTop: "10px"
				// , 
				// width: "100%"
			},

			unbreakable: {
				whiteSpace: "nowrap"
			}			
		};
	}, 

	render: function () {
		return (
			React.createElement("div", {id: "career_description_container", style: this.getStyles().careerDescriptionContainer}, 
				React.createElement("h1", {id: "careerDescription", className: "lead", style: this.getStyles().careerDescription}, 
					React.createElement("span", {id: "descriptionLeft", className: "offPageLeft career_description_text", ref: "descriptionLeft", style: this.getStyles().unbreakable}, "Web Development /"), " ", React.createElement("span", {id: "descriptionRight", className: "offPageRight career_description_text", ref: "descriptionRight", style: this.getStyles().unbreakable}, "Data Makeover Artist")
				)
			)			
		);
	}
});

module.exports = CareerDescription;
