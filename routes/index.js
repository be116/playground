var express = require('express');
var os = require('os'); // ホスト名を取得するために使用
var router = express.Router();

var hostname = os.hostname + '/';

/*=========== index =============*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Playground', author: 'nerunerune', day1: hostname + 'day1'});
});

/*========== day 1 ===========*/
router.get('/day1', function(req, res, next) {
  res.render('day1', { title: 'Playground', author: 'nerunerune', day1: hostname + 'day1'});
});

module.exports = router;
