var React = require('react');

var WelcomeButton = React.createClass({displayName: "WelcomeButton",
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
	
	addClassToDOMNode: function (selector, classToAdd) {
		var domNode = React.findDOMNode(this);

		$(domNode).find(selector).addClass(classToAdd);
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
		this.addClassToDOMNode('#welcomeButton', 'buttonHoverFade');
		this.addClassToDOMNode('#welcomeButtonLink', 'buttonTextFade');
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
			React.createElement("div", {id: "welcome_button_container", style: this.getStyles().welcomeButtonContainer}, 
				React.createElement("button", {ref: "welcomeButton", className: "btn btn-lg", id: "welcomeButton", style: this.getStyles().welcomeButton}, 
					React.createElement("a", {ref: "welcomeButtonLink", href: "#", id: "welcomeButtonLink", style: this.getStyles().welcomeButtonLink}, "More Info")
				)
			)			
		);
	}
});

module.exports = WelcomeButton;
