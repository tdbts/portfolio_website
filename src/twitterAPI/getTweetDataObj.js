var TweetDataObj = require('./TweetDataObj');

module.exports = function (tweet, url, type) {
	
	var dataObjInstance = new TweetDataObj(
		tweet.text, 
		tweet.created_at, 
		url.theURL, 
		url.isImage
	);

	if (type && type === 'keyword') {
		dataObjInstance.tweet_id = tweet.id_str; 
		dataObjInstance.screen_name = tweet.user.screen_name;
	}

	return dataObjInstance;
}
