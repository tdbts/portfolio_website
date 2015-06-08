var React = require('react');

var FeedCloudOptions = React.createClass({
	render: function () {
		return (
			<div className="options" id="feedCloudOptions">
				<p>Options:</p>
				<button type="button" id="getTenPreviousTweets" className="btn btn-primary btn-xs">Get Ten Previous Tweets</button>
				<button type="button" className="btn btn-primary btn-xs clearAll">Clear Tags</button>
			</div>			
		);
	}
});

module.exports = FeedCloudOptions;
