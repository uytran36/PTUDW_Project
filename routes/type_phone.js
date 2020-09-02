var express = require('express');
var router = express.Router();

const typePage = require('../controllers/details');

router.get('/:type_phone',typePage.type);

module.exports = router;