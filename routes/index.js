var express = require('express'), 
	router = express.Router(), 
	setActiveTab = require('../src/setActiveTab');

router.get('*', function (req, res, next) {
	req.activeRoute = req.activeRoute || '/'; 

	req.viewOptions = {
		title: "tdbts | A Humble Page for Humble Projects", 
		activeTab: req.activeRoute
	};

	next();
});

router.get('/', function(req, res) {

	res.render('navigation', req.viewOptions);
});

router.get('/:path/*', function (req, res, next) {

	setActiveTab(req);

	res.render('navigation', req.viewOptions);
});

module.exports = router;
