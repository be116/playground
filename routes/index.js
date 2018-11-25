var express = require('express');
var os = require('os'); // ホスト名を取得するために使用
var router = express.Router();

/*=========== index =============*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Playground', author: 'bbb', day1: 'day1'});
});

/*========== day 1 ===========*/
router.get('/day1', function(req, res, next) {
  res.render('day1', { title: 'Playground', author: 'bbb', day1: 'day1'});
});

module.exports = router;
