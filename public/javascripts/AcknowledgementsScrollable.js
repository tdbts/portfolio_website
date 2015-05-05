var React = require('react'), 
	ScrollableSection = require('./ScrollableSection');

var AcknowledgementsScrollable = React.createClass({displayName: "AcknowledgementsScrollable",

	getScrollableContent: function () {

		return this.props.scrollableSections.map(function (section) {
			return React.createElement(ScrollableSection, {key: section.id, id: section.id, content: section.content});
		});
	}, 

	render: function () {
		return (
			React.createElement("div", {ref: "scrollable", id: "scrollable", className: "col-md-7", "data-target": "#target_nav", "data-spy": "scroll"}, 
				this.getScrollableContent()
			)			
		);
	}
});

module.exports = AcknowledgementsScrollable;
