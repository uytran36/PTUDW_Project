var phone = [
    {id:1, name:'iPhone 11 Pro Max 64GB', prix:'33.990.000', img:'../img_phone/iPhone/iPhone 11 Pro Max.jpg'},
    {id:2, name:'iPhone 11 Pro 256GB', prix:'34.990.000', img:'../img_phone/iPhone/iPhone 11 Pro.jpg'}
]
const homepage=(req,res)=>
{
    res.render('acceuil', {phone: phone})
}

const detail=(req,res)=>
{
    var id = parseInt(req.params.id);
    var _phone = phone.find(x=>x.id===id);
    res.render('detail/detail', {phone:_phone})
}

const payer=(req,res)=>
{
    res.render('thanh_toan');
}



module.exports = {
    homepage,
    detail,
    payer
}