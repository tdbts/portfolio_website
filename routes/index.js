var express = require('express');
var router = express.Router();

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

router.get('/:path', function (req, res) {

	req.viewOptions.activeTab = req.path.slice(0, -1); 
	
	res.render('navigation', req.viewOptions);
});

module.exports = router;
