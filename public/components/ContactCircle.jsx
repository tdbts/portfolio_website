var React = require('react');

var ContactCircle = React.createClass({
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
			<div className={this.state.itemClass}>
				<div className={this.state.infoClass}>
					<div className={this.state.infoFrontClass} id={"ch-img-" + this.props.idNum}></div>
					{this.props.content}
				</div>
			</div>
		);
	}
});

module.exports = ContactCircle;
