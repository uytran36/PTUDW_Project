var express = require('express');
var router = express.Router();

const searchPage = require('../controllers/details')

router.get('/:name_phone', searchPage.search)

module.exports = router