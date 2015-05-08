var React = require('react'), 
	ContactCircle = require('./ContactCircle'), 
	classNames = require('classnames');

var ContactPage = React.createClass({displayName: "ContactPage",
	getDefaultProps: function () {
		return {
			circleBackContent: [
				{
					idNum: "1", 
					content: (
						React.createElement("div", {className: "ch-info-back fullHeightWidth"}, 
							React.createElement("a", {href: "#emailModal", id: "openEmailModal", "data-toggle": "modal", "data-target": "#myModal"}, React.createElement("span", {className: "fa-stack fa-3x needs_tooltip contact_icon", id: "stack_1", "data-toggle": "tooltip", "data-placement": "left", title: "Email"}, 
								React.createElement("span", {className: "fa fa-circle fa-stack-2x"}), 
								React.createElement("span", {className: "fa fa-envelope fa-stack-1x fa-inverse"})
							), React.createElement("br", null)), 
							React.createElement("h3", null, "Email"), 
							React.createElement("p", null, "VinnySanchez87@gmail.com")
						)
					)
				}, 
				{
					idNum: "2",  
					content: (
						React.createElement("div", {className: "ch-info-back fullHeightWidth"}, 
							React.createElement("a", {href: "#", id: "contactLink-1"}, React.createElement("span", {className: "fa-stack fa-3x needs_tooltip contact_icon", id: "stack_2", "data-toggle": "tooltip", "data-placement": "left", title: "GitHub"}, 
								React.createElement("span", {className: "fa fa-circle fa-stack-2x"}), 
								React.createElement("span", {className: "fa fa-github fa-stack-1x fa-inverse"})
							), React.createElement("br", null)), 
							React.createElement("h3", null, "Github"), 
							React.createElement("p", null, "tdbts")
						)
					)
				}, 
				{
					idNum: "3", 
					content: (
						React.createElement("div", {className: "ch-info-back fullHeightWidth"}, 
							React.createElement("a", {href: "#", id: "contactLink-2"}, React.createElement("span", {className: "fa-stack fa-3x needs_tooltip contact_icon", id: "stack_3", "data-toggle": "tooltip", "data-placement": "left", title: "Linked.in"}, 
								React.createElement("span", {className: "fa fa-circle fa-stack-2x"}), 
								React.createElement("span", {className: "fa fa-linkedin-square fa-stack-1x fa-inverse"})
							), React.createElement("br", null)), 
							React.createElement("h3", null, "Linked.in"), 
							React.createElement("p", null, "Vincent R. Sanchez")
						)
					)
				}, 
				{
					idNum: "4", 
					content: (
						React.createElement("div", {className: "ch-info-back fullHeightWidth"}, 
							React.createElement("a", {href: "#", id: "contactLink-3"}, React.createElement("span", {className: "fa-stack fa-3x needs_tooltip contact_icon", id: "stack_4", "data-toggle": "tooltip", "data-placement": "left", title: "Twitter"}, 
								React.createElement("span", {className: "fa fa-circle fa-stack-2x"}), 
								React.createElement("span", {className: "fa fa-twitter fa-stack-1x fa-inverse"})
							), React.createElement("br", null)), 
							React.createElement("h3", null, "Twitter"), 
							React.createElement("p", null, "VRSanchez8717")
						)
					)
				}, 
				{
					idNum: "5", 
					content: (
						React.createElement("div", {className: "ch-info-back fullHeightWidth"}, 
							React.createElement("a", {href: "#", id: "contactLink-4"}, React.createElement("span", {className: "fa-stack fa-3x needs_tooltip contact_icon", id: "stack_5", "data-toggle": "tooltip", "data-placement": "left", title: "Facebook"}, 
								React.createElement("span", {className: "fa fa-circle fa-stack-2x"}), 
								React.createElement("span", {className: "fa fa-facebook-square fa-stack-1x fa-inverse"})
							), React.createElement("br", null)), 
							React.createElement("h3", null, "Facebook"), 
							React.createElement("p", null, "VinnyFromTheQ")
						)
					)
				}			
			]
		};
	}, 

	getInitialState: function () {
		return {
			gridClass: "", 
			wallpaperHeight: {
				height: null, 
				maxHeight: null
			}
		};
	}, 

	createContactCircles: function () {
		var circles = this.props.circleBackContent.map(function (circle) {
			return (
				React.createElement("li", {key: circle.idNum, className: "circle_container"}, 
					React.createElement(ContactCircle, {idNum: circle.idNum, content: circle.content})
				)
			);
		});

		return circles;	
	}, 

	updateWallPaperDimensions: function () {
		this.setState({
			wallpaperHeight: {
				height: (window.innerHeight + window.scrollY).toString() + "px"
			}
		});
	}, 

	componentDidMount: function () {
		this.setState({gridClass: "ch-grid"});

		window.addEventListener('resize', this.updateWallPaperDimensions);
		window.addEventListener('scroll', this.updateWallPaperDimensions);
	}, 

	componentWillUnmount: function () {
		window.removeEventListener('resize', this.updateWallPaperDimensions);
		window.removeEventListener('scroll', this.updateWallPaperDimensions);
	},  

	render: function () {
		return (
			React.createElement("div", {id: "contact_content_container", className: "fullHeightWidth"}, 
				React.createElement("div", {className: "background fullHeightWidth", id: "wallpaper", style: this.state.wallpaperHeight}, 
					React.createElement("ul", {id: "contact_circle_unordered_list", className: this.state.gridClass}, 
						this.createContactCircles()
					)
				)
			)
		);
	}
});

module.exports = ContactPage;
