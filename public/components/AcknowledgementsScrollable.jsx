var React = require('react'), 
	ScrollableSection = require('./ScrollableSection');

var AcknowledgementsScrollable = React.createClass({

	getScrollableContent: function () {

		return this.props.scrollableSections.map(function (section) {
			return <ScrollableSection key={section.id} id={section.id} content={section.content} />;
		});
	}, 

	render: function () {
		return (
			<div ref="scrollable" id="scrollable" className="col-md-7" data-target="#target_nav" data-spy="scroll">
				{this.getScrollableContent()}
			</div>			
		);
	}
});

module.exports = AcknowledgementsScrollable;
