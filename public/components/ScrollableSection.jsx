var React = require('react'), 
	ScrollableSectionContent = require('./ScrollableSectionContent');

var ScrollableSection = React.createClass({
	render: function () {
		return (
			<section id={this.props.id} className="text_content">
				<ScrollableSectionContent id={this.props.id} titleContent={this.props.content.titleContent} textContent={this.props.content.textContent} />
			</section>
		);
	}
});

module.exports = ScrollableSection;
