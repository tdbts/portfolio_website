var React = require('react');

var TweetCloudMenuBodyHowItWorks = React.createClass({
	render: function () {
		return (
			<div id="how_it_works_content">
				<p>You can move the cloud around with your mouse, and one tweet at a time will be highlighted.  When you click inside the cloud, you will activate the highlighted tweet, which means:</p>
				<ul id="how_it_works_list">
					<li>If the the tweet contains a link, your browser will ask if you&#39;d like to go to that page.</li>
					<li>If the tweet has a picture, the page will display that picture.</li>
					<li>If the tweet has neither, the text of the tweet will be shown.</li>				
				</ul>
			</div>
		);
	}
});

module.exports = TweetCloudMenuBodyHowItWorks;
