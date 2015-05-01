var React = require('react');

var CareerDescription = React.createClass({
	getStyles: function () {
		return {
			careerDescriptionContainer: {
				marginBottom: "20px"
			}, 

			careerDescription: {
				fontSize: "1.75em",
				letterSpacing: "3px",  
				color: "#e1e1e1", 
				textShadow: "2px 2px 10px #2b2b2b", 
				marginTop: "10px"
			},

			unbreakable: {
				whiteSpace: "nowrap"
			}			
		};
	}, 

	getRefDOMNode: function (ref) {
		
		return React.findDOMNode(this.refs[ref]);
	},	

	componentDidMount: function () {
		$(this.getRefDOMNode('descriptionLeft')).addClass('offPageLeft');
		$(this.getRefDOMNode('descriptionRight')).addClass('offPageRight');	
	}, 

	render: function () {
		return (
			<div id="career_description_container" style={this.getStyles().careerDescriptionContainer}>
				<h1 id="careerDescription" className="lead" style={this.getStyles().careerDescription}>
					<span id="descriptionLeft" ref="descriptionLeft" style={this.getStyles().unbreakable}>Web Development /</span> <span id="descriptionRight" ref="descriptionRight" style={this.getStyles().unbreakable}>Data Makeover Artist</span>
				</h1>
			</div>			
		);
	}
});

module.exports = CareerDescription;
