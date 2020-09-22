var express = require('express');
var router = express.Router();

const ctrPage = require('../controllers/details')

router.get('/payer', ctrPage.payer)
router.get('/bill', ctrPage.bill)
router.get('/politiqueclient', ctrPage.pclient)
router.get('/politiquedegaranti', ctrPage.pgaranti)

router.get('/news', ctrPage.news)
router.get('/news/news1', ctrPage.news1)
router.get('/news/news2', ctrPage.news2)

router.get('/promo', ctrPage.promo)
router.get('/promo/promo1', ctrPage.promo1)
router.get('/promo/promo2', ctrPage.promo2)

module.exports = router;