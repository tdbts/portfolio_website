var React = require('react');

var AccordionPanelBody = React.createClass({
	getDefaultProps: function () {
		return {
			expandedByDefault: false
		};
	}, 

	render: function () {
		return (
			<div id={this.props.collapseID} className={"panel-collapse collapse" + (this.props.expandedByDefault ? " in" : "")} role="tabpanel" aria-labelledby={this.props.headingID}>
				<div className="panel-body">
					{this.props.bodyContent}
				</div>
			</div>			
		);
	}
});

module.exports = AccordionPanelBody;
