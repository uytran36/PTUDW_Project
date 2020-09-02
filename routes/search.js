var express = require('express');
var router = express.Router();

const searchPage = require('../controllers/details')

router.get('/', searchPage.search);

router.get('/sort', searchPage.sort);
module.exports = router