module.exports = function (environment) {
	return {
		consumer_key: environment.TWITTER_CONSUMER_KEY, 
		consumer_secret: environment.TWITTER_CONSUMER_SECRET, 
		access_token_key: environment.TWITTER_ACCESS_TOKEN_KEY, 
		access_token_secret: environment.TWITTER_ACCESS_TOKEN_SECRET
	};	
};
