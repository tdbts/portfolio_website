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
			itemClass: "ch-item", 
			infoClass: "ch-info", 
			infoFrontClass: "ch-info-front contact_circle", 
			infoBackClass: "ch-info-back"			
		})
	}, 

	render: function () {
		return (
			<div className={this.state.itemClass}>
				<div className={this.state.infoClass}>
					<div className={this.state.infoFrontClass} id={"ch-img-" + this.props.idNum}></div>
					<div className={this.state.infoBackClass}>
						{this.props.content}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ContactCircle;
