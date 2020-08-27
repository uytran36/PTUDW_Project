var phone = require('../models/phone.model')

const homepage=(req,res)=>
{
    res.render('acceuil')
}
// const detail=(req,res)=>
// {
//     var name_phone = req.params.name_phone;
//     phone.find({name:name_phone}).then(function(phones)
//     {
//         res.render('detail/detail', {phones: phones[0]})
//     }
//     )
// }
const detail=(req,res)=>
{
    var name_phone = req.params.name_phone;
    phone.find({name:name_phone}).then(function(phones){
        if(phones.length == 0)
            throw new Error('Not found');
        res.render('detail/detail', {phones: phones[0]})
    })
    .catch(() => {
        res.render('detail/thanh_toan')
    })
}
const payer=(req,res)=>
{
    res.render('thanh_toan');
}

const bill = (req,res)=>
{
    res.render('bill')
}


module.exports = {
    homepage,
    detail,
    payer,
    bill
}