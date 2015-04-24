var React = require('react'), 
	checkIfActive = require('./checkIfActive');

var NavListItem = React.createClass({
	render: function () {
		var className = checkIfActive.call(this, this.props.href);

		return (
			<li className={className}><a href={this.props.href}>{this.props.linkText}</a></li>
		);
	}
});

module.exports = NavListItem;
