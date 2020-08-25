var express = require('express');
var router = express.Router();

const ctrlPage = require('../controllers/details')


router.get('/', ctrlPage.homepage)

router.get('/:name_phone', ctrlPage.detail)

router.get('/search', ctrlPage.search)
module.exports = router;

