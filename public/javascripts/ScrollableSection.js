var React = require('react'), 
	ScrollableSectionContent = require('./ScrollableSectionContent');

var ScrollableSection = React.createClass({displayName: "ScrollableSection",
	render: function () {
		return (
			React.createElement("section", {id: this.props.id, className: "text_content"}, 
				React.createElement(ScrollableSectionContent, {id: this.props.id, titleContent: this.props.content.titleContent, textContent: this.props.content.textContent})
			)
		);
	}
});

module.exports = ScrollableSection;
