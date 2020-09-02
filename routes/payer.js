var express = require('express');
var router = express.Router();

const ctrPage = require('../controllers/details')

router.get('/payer', ctrPage.payer)
router.get('/bill', ctrPage.bill)

router.get('/news', ctrPage.news)
router.get('/news/news1', ctrPage.news)
router.get('/news/news2', ctrPage.news)

router.get('/promo', ctrPage.promo)

module.exports = router;