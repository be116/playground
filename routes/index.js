var express = require('express');
var os = require('os'); // ホスト名を取得するために使用
var router = express.Router();

/*=========== index =============*/
router.get('/', function(req, res, next) {
  var hostname = req.protocol + '://' + req.headers.host;
  res.render('index', { title: 'Playground', author: 'nerunerune', day1: hostname + 'day1'});
});

/*========== day 1 ===========*/
router.get('/day1', function(req, res, next) {
  var hostname = req.protocol + '://' + req.headers.host;
  res.render('day1', { title: 'Playground', author: 'nerunerune', day1: hostname + 'day1'});
});

module.exports = router;
