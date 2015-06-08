var Twitter = require('twitter'), 
	sanitizeString = require('./sanitizeString'), 
	getURLFromTweet = require('./getURLFromTweet'), 
	TweetDataObj = require('./TweetDataObj');

module.exports = function (req, res) {
	var userInput = req.params.searchTerms, 
		searchTerms = sanitizeString(userInput);

	var client = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY, 
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET, 
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY, 
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	});

	client.get('search/tweets', {q: searchTerms, count: 100, lang: 'en'}, function (err, tweets, response) {

		var searchResults = [], 
			tweets = tweets.statuses, 
			url, result;

		if (!err) {
			tweets.forEach(function (tweet) {
				var url = getURLFromTweet(tweet);

				searchResults.push(new TweetDataObj(
					tweet.text, 
					tweet.created_at, 
					url.theURL, 
					url.isImage, 
					tweet.id_str, 
					tweet.user.screen_name
				));

				result = JSON.stringify(searchResults);
			});	
		
		} else {
			result = "Sorry, there was an error making the request to Twitter.";
		}

		res.end(result);
	});

};