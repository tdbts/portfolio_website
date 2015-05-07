var React = require('react');

var ContactCircle = React.createClass({displayName: "ContactCircle",
	getInitialState: function () {
		return {
			itemClass: "", 
			infoClass: "", 
			infoFrontClass: "", 
			infoBackClass: ""
		};
	}, 

	componentDidMount: function () {
		this.setState({
			itemClass: "ch-item fullHeightWidth", 
			infoClass: "ch-info fullHeightWidth", 
			infoFrontClass: "ch-info-front contact_circle fullHeightWidth"			
		});
	}, 

	render: function () {
		return (
			React.createElement("div", {className: this.state.itemClass}, 
				React.createElement("div", {className: this.state.infoClass}, 
					React.createElement("div", {className: this.state.infoFrontClass, id: "ch-img-" + this.props.idNum}), 
					this.props.content
				)
			)
		);
	}
});

module.exports = ContactCircle;
