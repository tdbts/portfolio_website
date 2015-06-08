var React = require('react'), 
	AccordionPanelHeading = require('./AccordionPanelHeading'), 
	AccordionPanelBody = require('./AccordionPanelBody');

var AccordionPanel = React.createClass({
	getDefaultProps: function () {
		return {
			expandedByDefault: false
		};
	}, 

	render: function () {
		return (
			<div className={"panel panel-" + this.props.panelType}>
				<AccordionPanelHeading {...this.props} />
				<AccordionPanelBody {...this.props} />
			</div>
		);
	}
});

module.exports = AccordionPanel;

/* 

// PROPS: 
- panelType 
- headingID 
- accordionID 
- collapseID 
- expandedByDefault
- headingText 
- bodyContent

*/
