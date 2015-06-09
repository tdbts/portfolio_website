var processTweets = require('./processTweets'); 

module.exports = function (err, tweets, type) {
	var result;	

	if (!type) {
		type = "";
	}

	if (!err) {
		result = processTweets(tweets, type);
	
	} else {
		result = "Sorry, there was an error making the request to Twitter.";
	}		

	return result;
};
