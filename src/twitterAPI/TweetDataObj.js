module.exports = function (text, date, url, isImage, tweetID, screenName) {
	this.text = text;
	this.date = date;
	this.url = url;
	this.isImage = isImage;
	this.tweet_id = tweetID || "";
	this.screen_name = tweetID || "";
};
