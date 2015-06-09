var Twitter = require('twitter'), 
	getTwitterAPIKeys = require('./getTwitterAPIKeys'); 

module.exports = function () {

	return new Twitter(getTwitterAPIKeys(process.env));
};