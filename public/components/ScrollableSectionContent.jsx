var React = require('react');

var ScrollableSectionContent = React.createClass({
	render: function () {
		return (
			<div className="scrollable_section_content">
				<div id={this.props.id + "_title"} className="acknowledgements_section_title">
					{this.props.titleContent}
				</div>
				<div id={this.props.id + "_text"} className="acknowledgements_section_text">
					{this.props.textContent}
				</div>
			</div>
		);
	}
});

module.exports = ScrollableSectionContent;
