var React = require('react');

var AcknowledgementsWebpage = React.createClass({displayName: "AcknowledgementsWebpage",
	render: function () {
		return (
			React.createElement("div", {className: "scrollable_section_content"}, 
				React.createElement("div", {id: "webpage_section_title", className: "acknowledgements_section_text"}, 
					React.createElement("h4", {className: "lead"}, "Webpage")
				), 
				React.createElement("div", {id: "webpage_section_text", className: "acknowledgements_section_text"}, 
					React.createElement("p", null, React.createElement("a", {href: "http://www.getbootstrap.com"}, "Bootstrap"), " provided the HTML/CSS/Javascript framework for layout and responsiveness."), 
					React.createElement("p", null, "The ", React.createElement("a", {href: "http://www.jquery.com"}, "jQuery"), " Javascript library was used everywhere to produce the site's functionality."), 
					React.createElement("p", null, "The nifty icons used throughout the page were created by ", React.createElement("a", {href: "http://www.fortawesome.github.io/Font-Awesome"}, "Font Awesome"), "."), 
					React.createElement("p", null, "Version control for building the site was made possible by ", React.createElement("a", {href: "http://www.git-scm.com"}, "Git"), ".")
				)
			)			
		);
	}
});

module.exports = AcknowledgementsWebpage;
