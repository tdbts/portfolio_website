var React = require('react');

var AccordionPanelHeading = React.createClass({
	getDefaultProps: function () {
		return {
			expandedByDefault: false
		};
	}, 

	render: function () {
		return (
			<div className="panel-heading" role="tab" id={this.props.headingID}>
				<h4 className="panel-title">
					<a className="panel_heading_anchor" data-toggle="collapse" data-parent={"#" + this.props.accordionID} href={"#" + this.props.collapseID} aria-expanded={this.props.expandedByDefault === true ? "true" : "false"} aria-controls={this.props.collapseID}>
						{this.props.headingText}
					</a>
				</h4>
			</div>			
		);
	}
});

module.exports = AccordionPanelHeading;
