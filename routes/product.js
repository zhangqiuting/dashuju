var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
    res.render('product', { title: 'product产品页面' });
});

module.exports = router;
