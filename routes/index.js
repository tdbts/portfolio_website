var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.render('index', { title: "tdbts | A Humble Page for Humble Projects" });
});

module.exports = router;
