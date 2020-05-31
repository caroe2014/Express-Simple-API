var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{hello: 'Hello World. ', job: 'This'}, {user: 'is', job: 'a Success'}, {user: 'Test', job: 'congratulation'}]); 
});
router.get('/', function(req, res, next) {
  res.json([{test: 'Test', job: 'This'}, {user: 'a', job: 'a Success'}, {user: 'Test', job: 'congratulation'}]); 
});
module.exports = router;