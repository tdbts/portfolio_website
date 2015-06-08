var express = require('express'), 
	router = express.Router(), 
	setActiveTab = require('../src/setActiveTab'), 
	twitterTimelineSearch = require('../src/twitterAPI/twitterTimelineSearch'), 
	twitterKeywordSearch = require('../src/twitterAPI/twitterKeywordSearch');

router.get('*', function (req, res, next) {
	req.activeRoute = req.activeRoute || '/'; 

	req.viewOptions = {
		title: "tdbts | A Humble Page for Humble Projects", 
		activeTab: req.activeRoute
	};

	next();
});

router.get('/', function (req, res) {

	res.render('navigation', req.viewOptions);
});

router.get('/portfolio/tag_cloud/twitterTimelineSearch/:twitterHandle', function (req, res) {
	console.log("ROUTING FOR TWITTER TIMELINE SEARCH.");
	twitterTimelineSearch(req, res);
});

router.get('/portfolio/tag_cloud/twitterKeywordSearch/:searchTerms', function (req, res) {
	
	twitterKeywordSearch(req, res);
});

router.get('/:path/*', function (req, res, next) {

	setActiveTab(req);

	res.render('navigation', req.viewOptions);
});


module.exports = router;
