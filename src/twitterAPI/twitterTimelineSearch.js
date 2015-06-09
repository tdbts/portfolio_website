var sanitizeString = require('./sanitizeString'), 
	getTwitterClient = require('./getTwitterClient'), 
	handleTwitterAPICallResults = require('./handleTwitterAPICallResults');

module.exports = function (req, res) {
	var userInput = req.params.twitterHandle, 
		twitterHandle = sanitizeString(userInput); 

	var client = getTwitterClient();

	client.get('statuses/user_timeline', {screen_name: twitterHandle, count: 200}, function (err, tweets, response) {

		var result = handleTwitterAPICallResults(err, tweets);

		res.end(result);
	});	

};	
