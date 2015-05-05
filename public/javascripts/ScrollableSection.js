var React = require('react');

var ScrollableSection = React.createClass({displayName: "ScrollableSection",
	render: function () {
		return (
			React.createElement("section", {id: this.props.id, className: "text_content"}, 
				this.props.content
			)
		);
	}
});

module.exports = ScrollableSection;
