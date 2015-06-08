var Twitter = require('twitter'), 
	sanitizeString = require('./sanitizeString'), 
	getURLFromTweet = require('./getURLFromTweet'), 
	TweetDataObj = require('./TweetDataObj');

module.exports = function (req, res) {
	var userInput = req.params.twitterHandle, 
		twitterHandle = sanitizeString(userInput); 

	var client = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY, 
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET, 
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY, 
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	});

	client.get('statuses/user_timeline', {screen_name: twitterHandle}, function (err, tweets, response) {

		var tweetStream = [], 
			url, result;

		if (!err) {
			tweets.forEach(function (tweet) {
				var url = getURLFromTweet(tweet);
				
				tweetStream.push(new TweetDataObj(tweet.text, tweet.created_at, url.theURL, url.isImage));
			});
			
			result = JSON.stringify(tweetStream);

		
		} else {
			result = "Sorry, there was an error making the request to Twitter.";
		}

		res.end(result);
	});	

};