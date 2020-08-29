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
const bill=(req,res)=>
{
    res.render('bill');
}

const search=(req,res)=>{
    var keyword = req.query.keyword.toLowerCase();
    var flag = false;
    phone.find().then(function(phones){
        for (var p of phones)
            if (p.name.toLowerCase() == keyword){
                flag = true   
                res.render('detail/detail', {phones: phones[phones.indexOf(p)]});
            }
            if(!flag)    
                throw new Error('Not found');
    })
    .catch(() => {
        res.render('error/error')
    })
}

const post_comment=(req,res)=>
{
    var name_phone = req.params.name_phone;
    phone.update(
        {name:name_phone},
        { $push:
            { feedback: req.body}},
        {new:true},
        function(err, result)
        {
            if(err)
            {
                console.log(err)
            }
            console.log(result)
        }
    )
    res.redirect('/acceuil/'+name_phone)
    console.log(req.body)
}



module.exports = {
    homepage,
    detail,
    payer,
    search,
    bill,
    post_comment
}