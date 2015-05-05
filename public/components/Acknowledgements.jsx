var React = require('react'), 
	AcknowledgementsNav = require('./AcknowledgementsNav'), 
	AcknowledgementsScrollable = require('./AcknowledgementsScrollable');

var Acknowledgements = React.createClass({
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
					content: (
						<div className="scrollable_section_content">
							<h4>Appreciation</h4>
							<p>This webpage and the amount of new things I&apos;ve learned over the past few months could not have occurred without the help and support of a number of truly awesome people.</p>
							<p>I would like to thank my friends and family for the kindness, love and encouragement they have given me throughout these last few months of concentrated study.</p>
							<p>Thanks also to the web development and programming community, whose patience and willingness to teach continues to astound me day in and day out.</p>
							<br />
							<p><em>This site was created with help from the following resources</em>:</p>
						</div>
					)
				}, 
				{
					id: "webpage_section", 
					content: (
						<div className="scrollable_section_content">
							<h4>Webpage</h4>
							<p><a href="http://www.getbootstrap.com">Bootstrap</a> provided the HTML/CSS/Javascript framework for layout and responsiveness.</p>
							<p>The <a href="http://www.jquery.com">jQuery</a> Javascript library was used everywhere to produce the site&apos;s functionality.</p>
							<p>The nifty icons used throughout the page were created by <a href="http://www.fortawesome.github.io/Font-Awesome">Font Awesome</a>.</p>
							<p>Version control for building the site was made possible by <a href="http://www.git-scm.com">Git</a>.</p>
						</div>
					)
				},  
				{
					id: "home_section", 
					content: (
						<div className="scrollable_section_content">
							<h4>Home</h4>
							<p><a href="http://epicwpp.com/cities/urban-basketball-field-in-queens-new-york">Photo of basketball court in Queens, NY</a> courtesy of <a href="http://www.epicwpp.com/">Epic Wallpapers.</a></p>
							<p>Code for responsive, full-page background image influenced by <a href="http://www.ironsummitmedia.github.io/startbootstrap-stylish-portfolio">this Bootstrap template</a> from <a href="http://www.ironsummitmedia.com">Iron Summit Media Strategies.</a></p>
							<p>Thanks to Theo at <a href="http://www.tutsme-webdesign.info">tutsme-webdesign.info</a> for putting together <a href="http://www.tutsme-webdesign.info/bootstrap-3-contact-modal">this tutorial</a> on creating a Contact Modal using Bootstrap 3.</p>
						</div>
					)
				}, 
				{
					id: "tweet_cloud_section", 
					content: (
						<div className="scrollable_section_content">
							<h4>Tweet Cloud</h4>
							<p>Rodian Gorkovenko&apos;s <a href="http://www.jstagsphere.sourceforge.net">jstagsphere project</a> was the primary inspiration for the Tweet Cloud.</p>
							<p><a href="http://www.mattlag.com/scripting/hexcolorinverter.php">Hexadecimal Color Inverter</a> incorporated into Tweet Cloud code courtesy of <a href="http://www.mattlag.com">Matt Lagrandeur</a>.</p>
							<p>Part of <a href="http://www.addyosmani.com">Addy Osmani</a>&apos;s one-liner CSS layer debugging code was used to randomly select hexadecimal number for Tweet Cloud background colors.  Also thanks to Javier Marquez for his <a href="http://www.arquez.com/939/learning-much-javascript-one-line-code">great explanation</a> about its nuances.</p>
							<p>Thanks to Matt Harris&apos;s <a href="https://github.com/themattharris/tmhOAuth">Oauth 1.0A library</a> for helping take care of the handshake with <a href="https://dev.twitter.com">Twitter&apos;s API</a>.</p>
							<p><a href="http://www.140dev.com/twitter-api-programming-blog/twitter-api-ebook-javascript-programming">Javascript Programming for Twitter API 1.1</a> and <a href="http://www.140dev.com/twitter-api-programming-blog/twitter-api-ebook-single-user-twitter-oauth-programming">Single-user Twitter OAuth Programming</a>, two of <a href="http://www.140dev.com">Adam Green</a>&apos;s ebooks, were incredibly valuable for figuring out how to use Twitter&apos;s API.</p>
							<p><a href="http://www.stackoverflow.com/user/901048/blazemonger">Blazemonger</a>&apos;s accepted answer to <a href="http://www.stackoverflow.com/questions/8495687/split-array-into-chunks">this question</a> about splitting arrays on Stack Overflow was incorporated into the Tweet Cloud Javascript.</p>
							<p>The accepted answer to <a href="http://www.stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format">this Stack Overflow question</a> about converting Javascript&apos;s date and time object into 12-hour format by <a href="http://www.stackoverflow.com/users/507770/bbrame">bbrame</a> was added to cloud code.  And thank God for Stack Overflow.</p>
						</div>
					)
				}, 
				{
					id: "contact_section", 
					content: (
						<div className="scrollable_section_content">
							<h4>Contact</h4>
							<p>The tutorial about <a href="http://www.tympanus.net/codrops/2012/08/08/circle-hover-effects-with-css-transitions">Circle Hover Effects with CSS Transitions</a> by <a href="http://www.tympanus.net/codrops/author/crnacura">Mary Lou</a> of <a href="http://www.tympanus.net/codrops">Codrops</a> was really awesome, and provided the influence for the “city circles” on the contact page.</p>
							<p>Wallpaper image of rural road courtesy of <a href="http://http://www.gratisography.com">Gratisography</a>.</p>
							<p><a href="http://www.img2.goodfon.su/wallpaper/big/e/e5/new-york-nyu-york-amerika.jpg">Image</a> used for “City Circles” courtesy of <a href="http://www.joyreactor.cc">Joyreactor</a>.</p>
						</div>
					)
				}
			]
		};	
	}, 	

	getStyles: function () {
		return {
			acknowledgementsContainer: {
				marginTop: "50px"
			}
		}; 
	}, 

	render: function () {
		return (
			<div id="acknowledgements_container" style={this.getStyles().acknowledgementsContainer}>
				<div id="page_header_container" className="container">
					<h1 id="page_header" className="page-header">Acknowledgements</h1>
				</div>
				<div id="scrollspy_container" className="container">
					<div className="row">
						<div id="acknowledgements_nav_container" className="col-md-offset-1 col-md-3 hidden-xs nav">
							<AcknowledgementsNav ref="menuNav" menuOptions={this.props.menuOptions} />
						</div>
						<div id="acknowledgements_scrollable_container" className="col-md-8">
							<AcknowledgementsScrollable ref="scrollable" scrollableSections={this.props.scrollableSections} />
						</div>
					</div>
				</div>	
			</div>
		);
	}
});

module.exports = Acknowledgements;
