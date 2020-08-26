var phone = require('../models/phone.model');
const { render } = require('pug');

const homepage=(req,res)=>
{
    res.render('acceuil')
}
const detail=(req,res)=>
{
    var name_phone = req.params.name_phone;
    phone.find({name:name_phone}).then(function(phones){
        if(phones.length == 0)
            throw new Error('Not found');
        res.render('detail/detail', {phones: phones[0]})
    })
    .catch(() => {
        res.render('notfound')
    })
}

const payer=(req,res)=>
{
    res.render('thanh_toan');
}

const search=(req,res)=>{
    var name_phone = req.params.name_phone.toLowerCase();
    var flag = false;
    phone.find().then(function(phones){
        for (var p of phones)
            if (p.name.toLowerCase() == name_phone){
                flag = true   
                res.render('detail/detail', {phones: phones[phones.indexOf(p)]});
            }
            if(!flag)    
                throw new Error('Not found');
    })
    .catch(() => {
        res.render('notfound')
    })
}

module.exports = {
    homepage,
    detail,
    payer,
    search
}