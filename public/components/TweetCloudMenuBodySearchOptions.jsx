var React = require('react'), 
	TweetCloudOptions = require('./TweetCloudOptions');

var TweetCloudMenuBodySearchOptions = React.createClass({
	render: function () {
		return (
			<div id="search_options_container">
				<p>There are two kinds of Tweet Clouds you can create:</p>
				<ol id="tweet_cloud_types_list">
					<li>
						Feed Cloud: Make one using anyone&#39;s Twitter handle.
						<ul>
							<li>
								<h6><em>Examples: Earth_Pics, HistoryInPics, BabyAnimalPics</em></h6>
							</li>
						</ul>
					</li>
				  	<li>
				  		Search Cloud: Create one by searching for any term you desire.
						<ul>
							<li>
								<h6><em>Examples: NYC, SuperBowl, CrossFit</em></h6>
							</li>
						</ul>
				  	</li>
				</ol>  
				<p>You can manually refresh the Feed Cloud with ten previous tweets, while the Search Cloud will automatically refresh with more tweets.  Have fun!</p>			
				<TweetCloudOptions />
			</div>
		);
	}
});

module.exports = TweetCloudMenuBodySearchOptions;
