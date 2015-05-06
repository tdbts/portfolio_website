var React = require('react');

var AcknowledgementsAppreciation = React.createClass({displayName: "AcknowledgementsAppreciation",
	getStyles: function () {
		return {
			resourceIntroduction: {
				marginTop: "35px"
			}
		};	
	}, 

	render: function () {
		return (
			React.createElement("div", {className: "scrollable_section_content"}, 
				React.createElement("div", {id: "appreciation_section_title", className: "acknowledgements_section_title"}, 
					React.createElement("h4", {className: "lead"}, "Appreciation")
				), 
				React.createElement("div", {id: "appreciation_section_text", className: "acknowledgements_section_text"}, 
					React.createElement("p", null, "This webpage and the amount of new things I've learned over the past few months could not have occurred without the help and support of a number of truly awesome people."), 
					React.createElement("p", null, "I would like to thank my friends and family for the kindness, love and encouragement they have given me throughout these last few months of concentrated study."), 
					React.createElement("p", null, "Thanks also to the web development and programming community, whose patience and willingness to teach continues to astound me day in and day out."), 
					React.createElement("p", {id: "resource_introduction", style: this.getStyles().resourceIntroduction}, 
						React.createElement("em", null, "This site was created with help from the following resources"), ":"
					)
				)
			)			
		);
	}
});

module.exports = AcknowledgementsAppreciation;
