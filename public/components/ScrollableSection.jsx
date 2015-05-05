var React = require('react');

var ScrollableSection = React.createClass({
	render: function () {
		return (
			<section id={this.props.id} className="text_content">
				{this.props.content}
			</section>
		);
	}
});

module.exports = ScrollableSection;
