var express = require('express');
var router = express.Router();

const adm  = require('../controllers/admin');
var router = express.Router();


router.get('/', adm.Home);
router.get('/loggedin', adm.login);

module.exports = router;
