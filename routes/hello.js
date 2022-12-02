var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data={
        title: 'Hello!',
        content:'サンプル<br>this'
    }
  res.render('hello', data);
});

module.exports = router;
