var express = require('express');

var controller = require('../controllers/phone.api.controller')

var router = express.Router();

router.get('/', controller.index);
router.get('/bill', controller.bill)
router.get('/search', controller.FindPhone);
router.get('/keyword', controller.RelativePhone);
module.exports = router;

