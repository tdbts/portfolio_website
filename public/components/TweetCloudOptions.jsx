var React = require('react'), 
	FeedCloudOptions = require('./FeedCloudOptions'), 
	SearchCloudOptions = require('./SearchCloudOptions');

var TweetCloudOptions = React.createClass({
	render: function () {
		return (
			<div id="tweet_cloud_options_container">
				<FeedCloudOptions />
				<SearchCloudOptions />
			</div>
		);
	}
});

module.exports = TweetCloudOptions;
