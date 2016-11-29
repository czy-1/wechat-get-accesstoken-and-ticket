var express = require('express');
var router = express.Router();

var token = require('../bin/wechat_token');
//这里把id和secret改成自己的
token.config('id','secret',3600000);

router.get('/token', function (req, res, next) {
    res.send(token.access_token());
});
router.get('/ticket', function (req, res, next) {
    res.send(token.ticket());
});

module.exports = router;
