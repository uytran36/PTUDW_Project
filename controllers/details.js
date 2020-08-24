var phone = require('../models/phone.model')

const homepage=(req,res)=>
{
    res.render('acceuil')
}
const detail=(req,res)=>
{
    var name_phone = req.params.name_phone;
    phone.find({name:name_phone}).then(function(phones)
    {
        res.render('detail/detail', {phones: phones[0]})
    }
    )
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