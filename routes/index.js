var express = require('express'), 
	router = express.Router(), 
	setActiveTab = require('../src/setActiveTab'), 
	mapSearchTypeToSearchModule = require('../src/twitterAPI/mapSearchTypeToSearchModule'), 
	sendEmail = require('../src/sendEmail');

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

router.get('/portfolio/tag_cloud/api/:searchType/:userInput', function (req, res) {

	mapSearchTypeToSearchModule(req.params.searchType, req, res);
});

router.post('/sendEmail', function (req, res) {
	
	var userEmailData = {
		firstName: req.body.firstName, 
		lastName: req.body.lastName, 
		email: req.body.email, 
		comments: req.body.comments
	};

	sendEmail(userEmailData, req, res);
});

router.get('/:path/*', function (req, res, next) {

	setActiveTab(req);

	res.render('navigation', req.viewOptions);
});

module.exports = router;
