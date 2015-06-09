var getURLFromTweet = require('./getURLFromTweet'), 
	getTweetDataObj = require('./getTweetDataObj');

module.exports = function (tweetArray, type) {
	var dest = [];

	if (!type) {
		type = "";
	}

	tweetArray.forEach(function (tweet) {
		var url = getURLFromTweet(tweet);

		dest.push(getTweetDataObj(tweet, url, type));
	});
	
	return JSON.stringify(dest);
}
