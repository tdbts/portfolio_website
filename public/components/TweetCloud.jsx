var React = require('react'), 
	TweetCloudMenu = require('./TweetCloudMenu'), 
	TweetCloudSearchInput = require('./TweetCloudSearchInput'), 
	TweetCloudImageModal = require('./TweetCloudImageModal'), 
	$ = window.jQuery || require('jquery');

var TweetCloud = React.createClass({
	componentDidMount: function () {
		$.getScript('/javascripts/tweetCloudScript.js');
		$.getScript('/javascripts/cloud.js');
	}, 

	render: function () {
		return (
			<div id="tweet_cloud_background" className="fullHeightWidth">
				<div id="tweet_cloud_info_container" className="container">
					<div id="tweet_cloud_header_container">
						<h1 id="tweet_cloud_header" className="page-header col-xs-10">Tweet Cloud</h1>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div id="tweet_cloud_menu_container">
								<TweetCloudMenu accordionID="tweet_cloud_menu_accordion" />
							</div>
						</div>
						<div className="col-md-4">
							<TweetCloudSearchInput inputID="feed_cloud_input" inputHeader="Create a Cloud From Your Twitter Feed" inputPrompt="Enter Your Twitter Handle: " buttonText="Create Feed Cloud" />
						</div>
						<div className="col-md-4">
							<TweetCloudSearchInput inputID="search_cloud_input" inputHeader="Create a Cloud From Your Twitter Search" inputPrompt="Enter Your Search Term: " buttonText="Create Search Cloud" />
						</div>
					</div>
				</div>
				<TweetCloudImageModal />
				<div id="cloudParent">
					<div id="clouder"></div>
				</div>
			</div>			
		);
	}
});

module.exports = TweetCloud;
