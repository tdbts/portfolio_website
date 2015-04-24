var React = require('react');

var FormGroup = React.createClass({displayName: "FormGroup",
	render: function () {
		return (
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: this.props.name, className: "control-label col-md-4"}, this.props.text), 
				React.createElement("div", {className: "col-md-6"}, 
					React.createElement("input", {type: "text", className: "form-control", id: this.props.name, name: this.props.name, placeholder: this.props.placeholder})
				)
			)			
		);
	}
});

module.exports = FormGroup;
