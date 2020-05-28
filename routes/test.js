var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{test: 'Hello', job: 'This'}, {user: 'is', job: 'a Success'}, {user: 'Test', job: 'congratulation'}]); 
});

module.exports = router;