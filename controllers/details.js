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
    var keyword2 = req.query.keyword;
    var result = [];
    phone.find().then(function(phones){
        for (var p of phones)
            if (p.name.toLowerCase().indexOf(keyword) !== -1){
                result.push(p);
            }  
        if(result.length !== 0)        
            res.render('search_phone/search_phone', {phones: result, keyword2});
        else    
            throw new Error('Not found');
    })
    .catch(() => {
        res.render('error/error')
    })
}

const type=(req, res) =>{
    var type_phone = req.params.type_phone;
    phone.find({type: type_phone}).then(function(phones){
        res.render('type_phone/type_phone', {phones: phones});
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
    type,
    bill,
    post_comment
}