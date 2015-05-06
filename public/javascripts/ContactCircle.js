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
			itemClass: "ch-item", 
			infoClass: "ch-info", 
			infoFrontClass: "ch-info-front contact_circle", 
			infoBackClass: "ch-info-back"			
		})
	}, 

	render: function () {
		return (
			React.createElement("div", {className: this.state.itemClass}, 
				React.createElement("div", {className: this.state.infoClass}, 
					React.createElement("div", {className: this.state.infoFrontClass, id: "ch-img-" + this.props.idNum}), 
					React.createElement("div", {className: this.state.infoBackClass}, 
						this.props.content
					)
				)
			)
		);
	}
});

module.exports = ContactCircle;
