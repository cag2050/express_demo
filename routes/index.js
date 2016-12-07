var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("home router");
    res.render('index', {title: 'Express666'});
});

module.exports = router;
