var React = require('react'), 
	checkIfActive = require('./checkIfActive');

var NavListItem = React.createClass({displayName: "NavListItem",
	render: function () {
		var className = checkIfActive.call(this, this.props.href);

		return (
			React.createElement("li", {className: className}, React.createElement("a", {href: this.props.href}, this.props.linkText))
		);
	}
});

module.exports = NavListItem;
