var express = require('express');
var router = express.Router();

router.get('*', function (req, res, next) {
	req.activeRoute = req.activeRoute || '/';

	next();
});

router.get('/', function(req, res) {

	res.render('navigation', { 
		title: "tdbts | A Humble Page for Humble Projects", 
		activeTab: req.activeRoute 
	});
});

module.exports = router;
