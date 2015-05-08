var React = require('react'), 
	AcknowledgementsNav = require('./AcknowledgementsNav'), 
	AcknowledgementsScrollable = require('./AcknowledgementsScrollable'), 
	AcknowledgementsAppreciation = require('./AcknowledgementsAppreciation'), 
	AcknowledgementsWebpage = require('./AcknowledgementsWebpage');

var Acknowledgements = React.createClass({displayName: "Acknowledgements",
	getDefaultProps: function () {
		return {
			menuOptions: [
				{
					href: "appreciation_section",
					text: "Appreciation"
				}, 
				{
					href: "webpage_section", 
					text: "Webpage"
				}, 
				{
					href: "home_section", 
					text: "Home"
				}, 
				{
					href: "tweet_cloud_section", 
					text: "Tweet Cloud"
				}, 
				{
					href: "contact_section", 
					text: "Contact"
				}																
			], 

			scrollableSections: [
				{
					id: "appreciation_section", 
					content: {
						titleContent: (
							React.createElement("h4", {className: "lead"}, "Appreciation")
						), 
						textContent: (
							React.createElement("div", null, 
								React.createElement("p", null, "This webpage and the amount of new things I've learned over the past few months could not have occurred without the help and support of a number of truly awesome people."), 
								React.createElement("p", null, "I would like to thank my friends and family for the kindness, love and encouragement they have given me throughout these last few months of concentrated study."), 
								React.createElement("p", null, "Thanks also to the web development and programming community, whose patience and willingness to teach continues to astound me day in and day out."), 
								React.createElement("p", {id: "resource_introduction"}, 
									React.createElement("em", null, "This site was created with help from the following resources"), ":"
								)
							)
						)
					}
				}, 
				{
					id: "webpage_section", 
					content: {
						titleContent: (
							React.createElement("h4", {className: "lead"}, "Webpage")
						), 
						textContent: (
							React.createElement("div", null, 
								React.createElement("p", null, React.createElement("a", {href: "http://www.getbootstrap.com"}, "Bootstrap"), " provided the HTML/CSS/Javascript framework for layout and responsiveness."), 
								React.createElement("p", null, "The ", React.createElement("a", {href: "http://www.jquery.com"}, "jQuery"), " Javascript library was used everywhere to produce the site's functionality."), 
								React.createElement("p", null, "The nifty icons used throughout the page were created by ", React.createElement("a", {href: "http://www.fortawesome.github.io/Font-Awesome"}, "Font Awesome"), "."), 
								React.createElement("p", null, "Version control for building the site was made possible by ", React.createElement("a", {href: "http://www.git-scm.com"}, "Git"), ".")							
							)
						)
					}
				},  
				{
					id: "home_section", 
					content: {
						titleContent: (
							React.createElement("h4", {className: "lead"}, "Home")
						), 
						textContent: (
							React.createElement("div", null, 
								React.createElement("p", null, React.createElement("a", {href: "http://epicwpp.com/cities/urban-basketball-field-in-queens-new-york"}, "Photo of basketball court in Queens, NY"), " courtesy of ", React.createElement("a", {href: "http://www.epicwpp.com/"}, "Epic Wallpapers.")), 
								React.createElement("p", null, "Code for responsive, full-page background image influenced by ", React.createElement("a", {href: "http://www.ironsummitmedia.github.io/startbootstrap-stylish-portfolio"}, "this Bootstrap template"), " from ", React.createElement("a", {href: "http://www.ironsummitmedia.com"}, "Iron Summit Media Strategies.")), 
								React.createElement("p", null, "Thanks to Theo at ", React.createElement("a", {href: "http://www.tutsme-webdesign.info"}, "tutsme-webdesign.info"), " for putting together ", React.createElement("a", {href: "http://www.tutsme-webdesign.info/bootstrap-3-contact-modal"}, "this tutorial"), " on creating a Contact Modal using Bootstrap 3.")
							)
						)
					}
				}, 
				{
					id: "tweet_cloud_section", 
					content: {
						titleContent: (
							React.createElement("h4", {className: "lead"}, "Tweet Cloud")
						), 
						textContent: (
							React.createElement("div", null, 
								React.createElement("p", null, "Rodian Gorkovenko's ", React.createElement("a", {href: "http://www.jstagsphere.sourceforge.net"}, "jstagsphere project"), " was the primary inspiration for the Tweet Cloud."), 
								React.createElement("p", null, React.createElement("a", {href: "http://www.mattlag.com/scripting/hexcolorinverter.php"}, "Hexadecimal Color Inverter"), " incorporated into Tweet Cloud code courtesy of ", React.createElement("a", {href: "http://www.mattlag.com"}, "Matt Lagrandeur"), "."), 
								React.createElement("p", null, "Part of ", React.createElement("a", {href: "http://www.addyosmani.com"}, "Addy Osmani"), "'s one-liner CSS layer debugging code was used to randomly select hexadecimal number for Tweet Cloud background colors.  Also thanks to Javier Marquez for his ", React.createElement("a", {href: "http://www.arquez.com/939/learning-much-javascript-one-line-code"}, "great explanation"), " about its nuances."), 
								React.createElement("p", null, "Thanks to Matt Harris's ", React.createElement("a", {href: "https://github.com/themattharris/tmhOAuth"}, "Oauth 1.0A library"), " for helping take care of the handshake with ", React.createElement("a", {href: "https://dev.twitter.com"}, "Twitter's API"), "."), 
								React.createElement("p", null, React.createElement("a", {href: "http://www.140dev.com/twitter-api-programming-blog/twitter-api-ebook-javascript-programming"}, "Javascript Programming for Twitter API 1.1"), " and ", React.createElement("a", {href: "http://www.140dev.com/twitter-api-programming-blog/twitter-api-ebook-single-user-twitter-oauth-programming"}, "Single-user Twitter OAuth Programming"), ", two of ", React.createElement("a", {href: "http://www.140dev.com"}, "Adam Green"), "'s ebooks, were incredibly valuable for figuring out how to use Twitter's API."), 
								React.createElement("p", null, React.createElement("a", {href: "http://www.stackoverflow.com/user/901048/blazemonger"}, "Blazemonger"), "'s accepted answer to ", React.createElement("a", {href: "http://www.stackoverflow.com/questions/8495687/split-array-into-chunks"}, "this question"), " about splitting arrays on Stack Overflow was incorporated into the Tweet Cloud Javascript."), 
								React.createElement("p", null, "The accepted answer to ", React.createElement("a", {href: "http://www.stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format"}, "this Stack Overflow question"), " about converting Javascript's date and time object into 12-hour format by ", React.createElement("a", {href: "http://www.stackoverflow.com/users/507770/bbrame"}, "bbrame"), " was added to cloud code.  And thank God for Stack Overflow.")
							)
						)
					}
				}, 
				{
					id: "contact_section", 
					content: {
						titleContent: (
							React.createElement("h4", {className: "lead"}, "Contact")
						), 
						textContent: (
							React.createElement("div", null, 
								React.createElement("p", null, "The tutorial about ", React.createElement("a", {href: "http://www.tympanus.net/codrops/2012/08/08/circle-hover-effects-with-css-transitions"}, "Circle Hover Effects with CSS Transitions"), " by ", React.createElement("a", {href: "http://www.tympanus.net/codrops/author/crnacura"}, "Mary Lou"), " of ", React.createElement("a", {href: "http://www.tympanus.net/codrops"}, "Codrops"), " was really awesome, and provided the influence for the “city circles” on the contact page."), 
								React.createElement("p", null, "Wallpaper image of rural road courtesy of ", React.createElement("a", {href: "http://http://www.gratisography.com"}, "Gratisography"), "."), 
								React.createElement("p", null, React.createElement("a", {href: "http://www.img2.goodfon.su/wallpaper/big/e/e5/new-york-nyu-york-amerika.jpg"}, "Image"), " used for “City Circles” courtesy of ", React.createElement("a", {href: "http://www.joyreactor.cc"}, "Joyreactor"), ".")
							)
						)
					}
				}
			]
		};	
	}, 	

	getStyles: function () {
		return {
			acknowledgementsContainer: { 
				backgroundColor: "#fbfbfb"
			}, 			
		}; 
	}, 

	render: function () {
		return (
			React.createElement("div", {id: "acknowledgements_container", className: "container-fluid", style: this.getStyles().acknowledgementsContainer}, 
				React.createElement("div", {id: "page_header_container", className: "row"}, 
					React.createElement("h1", {id: "page_header", className: "page-header col-xs-10"}, "Acknowledgements")
				), 
				React.createElement("div", {id: "scrollspy_container", className: "row"}, 
					React.createElement("div", {id: "acknowledgements_nav_container", className: "col-md-offset-1 col-md-3 hidden-xs nav"}, 
						React.createElement(AcknowledgementsNav, {menuOptions: this.props.menuOptions})
					), 
					React.createElement("div", {id: "acknowledgements_scrollable_container", className: "col-md-8"}, 
						React.createElement(AcknowledgementsScrollable, {scrollableSections: this.props.scrollableSections})
					)
				)	
			)
		);
	}
});

module.exports = Acknowledgements;