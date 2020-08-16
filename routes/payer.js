var express = require('express');
var router = express.Router();

const ctrPage = require('../controllers/details')

router.get('/payer', ctrPage.payer)

module.exports = router;