var express = require('express');
var router = express.Router();

var phone = [
    {id:1, name:'iPhone 11 Pro Max 64GB', prix:'33.990.000', img:'../img_phone/iPhone/iPhone 11 Pro Max.jpg'},
    {id:2, name:'iPhone 11 Pro 256GB', prix:'34.990.000', img:'../img_phone/iPhone/iPhone 11 Pro.jpg'}
]

router.get('/', function(req, res)
{
    res.render('acceuil', {phone: phone}) 
});

router.get('/:id',function(req,res)
{
    var id = parseInt(req.params.id);
    var _phone = phone.find(x=>x.id===id);
    res.render('detail/detail', {name:_phone.name, prix:_phone.prix, img:_phone.img, phone:_phone})
})

module.exports = router;

