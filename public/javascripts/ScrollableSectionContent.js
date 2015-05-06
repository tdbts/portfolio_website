var React = require('react');

var ScrollableSectionContent = React.createClass({displayName: "ScrollableSectionContent",
	render: function () {
		return (
			React.createElement("div", {className: "scrollable_section_content"}, 
				React.createElement("div", {id: this.props.id + "_title", className: "acknowledgements_section_title"}, 
					this.props.titleContent
				), 
				React.createElement("div", {id: this.props.id + "_text", className: "acknowledgements_section_text"}, 
					this.props.textContent
				)
			)
		);
	}
});

module.exports = ScrollableSectionContent;
