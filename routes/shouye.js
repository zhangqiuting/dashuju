var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('shouye', { s01: '招聘会数据',s02:'毕业生期望薪酬分析',s03:'毕业生数据' });
});

module.exports = router;
