var express = require('express');
var router = express.Router();

const ctrlPage = require('../controllers/details')


router.get('/', ctrlPage.homepage)

router.get('/:id', ctrlPage.detail)


module.exports = router;

