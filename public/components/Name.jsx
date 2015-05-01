var React = require('react');

var Name = React.createClass({
	getStyles: function () {
		return {
			nameContainer: {
				display: "inline-block"
			},

			myName: {
				fontFamily: "'Impact', 'Palatino Linotype', 'Book Antiqua', Palatino, serif", 
				letterSpacing: "5px", 
				fontSize: "6em", 
				textShadow: "1px 1px 5px #797979", 
				borderBottom: "1px solid black", 
				marginBottom: "15px"
			},			
		};
	}, 

	render: function () {
		return (
			<div id="name_container" style={this.getStyles().nameContainer}>
				<h1 id="myName" style={this.getStyles().myName}>Vinny Sanchez</h1>
			</div>			
		);
	}
});

module.exports = Name;
