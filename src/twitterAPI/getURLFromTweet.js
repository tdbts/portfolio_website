var UrlDataObj = require('./UrlDataObj'), 
	debug = require('debug')('getURLFromTweet');

module.exports = function (theTweet) {
	var urlLocation = theTweet.entities.urls ? theTweet.entities.urls : [], 
		mediaLocation = theTweet.entities.media ? theTweet.entities.media : [],
		urlData;

	if (urlLocation.length > 0) {
		urlData = new UrlDataObj(urlLocation[0].expanded_url, false); 

	} else if (mediaLocation.length > 0) {
		urlData = new UrlDataObj(mediaLocation[0].media_url, true);
	
	} else {
		urlData = new UrlDataObj(null, null);
	}

	return urlData;
};
