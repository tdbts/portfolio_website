var React = require('react');

var WelcomeButton = React.createClass({
	getInitialState: function () {
		return {
			welcomeButtonClassString: "btn btn-lg", 
			welcomeButtonLinkClassString: ""
		};
	}, 

	getStyles: function () {
		return {
			welcomeButtonContainer: { 
				padding: "10px"
			}, 

			welcomeButton: {
				opacity: "0.8", 
				border: "1px solid #000"
			}, 

			welcomeButtonLink: {
				textDecoration: "none"
			}
		};	
	},

	getRefDOMNode: function (ref) {
		
		return React.findDOMNode(this.refs[ref]);
	}, 

	changeLinkTextColorTo: function (colorHex) {

		$(this.getRefDOMNode('welcomeButton')).find('a').css({color: colorHex});
	}, 


	addButtonTextTransition: function () {
		var self = this, 
			welcomeButtonNode = this.getRefDOMNode('welcomeButton');

		$(welcomeButtonNode).hover(
			function () {
				self.changeLinkTextColorTo("#333");
			}, 
			function () {
				self.changeLinkTextColorTo("#e1e1e1");
			}
		);	
	}, 

	addTransitionsToButton: function () {
		this.setState({welcomeButtonClassString: this.state.welcomeButtonClassString + ' buttonHoverFade'});
		this.setState({welcomeButtonLinkClassString: this.state.welcomeButtonLinkClassString + ' buttonTextFade'});
		this.addButtonTextTransition();		
	}, 


	componentDidMount: function () {
		this.addTransitionsToButton();
	},  

	componentWillUnmount: function () {
		$(this.getRefDOMNode('welcomeButton')).unbind('mouseenter mouseleave');
	}, 

	render: function () {
		return (
			<div id="welcome_button_container" style={this.getStyles().welcomeButtonContainer}>
				<button id="welcomeButton" className={this.state.welcomeButtonClassString} ref="welcomeButton" style={this.getStyles().welcomeButton}>
					<a id="welcomeButtonLink" className={this.state.welcomeButtonLinkClassString} ref="welcomeButtonLink" href="#" style={this.getStyles().welcomeButtonLink}>More Info</a>
				</button>
			</div>			
		);
	}
});

module.exports = WelcomeButton;
