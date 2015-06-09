var sanitizeString = require('../sanitizeString'), 
	getTwitterClient = require('./getTwitterClient'), 
	handleTwitterAPICallResults = require('./handleTwitterAPICallResults');

module.exports = function (req, res) {
	var searchTerms = req.params.userInput, 
		searchTerms = sanitizeString(searchTerms);

	var client = getTwitterClient();

	client.get('search/tweets', {q: searchTerms, count: 100, lang: 'en'}, function (err, tweets, response) {

		var tweets = tweets.statuses, 
			result = handleTwitterAPICallResults(err, tweets, 'keyword');

		res.end(result);
	});

};
