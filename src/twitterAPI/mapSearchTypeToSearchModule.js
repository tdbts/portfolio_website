var twitterTimelineSearch = require('./twitterTimelineSearch'), 
	twitterKeywordSearch = require('./twitterKeywordSearch');

var searchMapper = {

	'twitterTimelineSearch': twitterTimelineSearch, 
	'twitterKeywordSearch': twitterKeywordSearch

};

module.exports = function (searchType, req, res) {
	
	if (searchMapper.hasOwnProperty(searchType)) {
		searchMapper[searchType](req, res);
	}		
};
