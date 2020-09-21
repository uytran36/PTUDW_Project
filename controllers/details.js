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
        res.render('detail', {phones: phones[0]})
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
    var order = req.query.order;
    phone.find().then(function(phones){
        for (var p of phones)
            if (p.name.toLowerCase().indexOf(keyword) !== -1){
                result.push(p);
            }
        if(order == 'asc')
            result.sort(function(a, b){ return parseInt(a.prix.replace(/[.,]/g,'')) - parseInt(b.prix.replace(/[.,]/g,''))})
        if(order == 'dsc')
            result.sort(function(a, b){ return parseInt(b.prix.replace(/[.,]/g,'')) - parseInt(a.prix.replace(/[.,]/g,''))})
        if(result.length !== 0)        
            res.render('search_phone', {phones: result, keyword2});
        else    
            throw new Error('Not found');
    })
    .catch(() => {
        res.render('error')
    })
}

const type=(req, res) =>{
    var type_phone = req.params.type_phone;
    var order = req.query.order;
    phone.find({type: type_phone}).then(function(phones){
        if(order == 'asc')
            phones.sort(function(a, b){ return parseInt(a.prix.replace(/[.,]/g,'')) - parseInt(b.prix.replace(/[.,]/g,''))})
        if(order == 'dsc')
            phones.sort(function(a, b){ return parseInt(b.prix.replace(/[.,]/g,'')) - parseInt(a.prix.replace(/[.,]/g,''))})
        res.render('type_phone', {phones: phones});
    })
}

const sort=(req,res) =>{
    var keyword = req.query.keyword.toLowerCase();
    var keyword2 = req.query.keyword;
    var result = [];
    var price = req.query.price;
    var order = req.query.order;
    switch (price){
        case '0-5m':
            var itemPrice = 5000000;
            phone.find().then(function(phones){
                for (var p of phones){
                    var prix = p.prix.replace(/[.,]/g,'')
                    prix = parseInt(prix);
                    if (p.name.toLowerCase().indexOf(keyword) !== -1 && prix <= itemPrice)
                        result.push(p);   
                }
                if(order == 'asc')
                    result.sort(function(a, b){ return parseInt(a.prix.replace(/[.,]/g,'')) - parseInt(b.prix.replace(/[.,]/g,''))})
                if(order == 'dsc')
                    result.sort(function(a, b){ return parseInt(b.prix.replace(/[.,]/g,'')) - parseInt(a.prix.replace(/[.,]/g,''))})
                if(result.length !== 0)        
                    res.render('search_phone', {phones: result, keyword2});
                else    
                    throw new Error('Not found');
            })
            .catch(() => {
                res.render('error')
            })
            break;
        case '5-10m':
            var itemPrice = 10000000;
            phone.find().then(function(phones){
                for (var p of phones){
                    var prix = p.prix.replace(/[.,]/g,'')
                    prix = parseInt(prix);
                    if (p.name.toLowerCase().indexOf(keyword) !== -1 && 5000000 < prix && prix <= itemPrice)
                        result.push(p);   
                }
                if(order == 'asc')
                    result.sort(function(a, b){ return parseInt(a.prix.replace(/[.,]/g,'')) - parseInt(b.prix.replace(/[.,]/g,''))})
                if(order == 'dsc')
                    result.sort(function(a, b){ return parseInt(b.prix.replace(/[.,]/g,'')) - parseInt(a.prix.replace(/[.,]/g,''))}) 
                if(result.length !== 0)        
                    res.render('search_phone', {phones: result, keyword2});
                else    
                    throw new Error('Not found');
            })
            .catch(() => {
                res.render('error')
            })
            break;        
        case '10m':
            var itemPrice = 10000000;
            phone.find().then(function(phones){
                for (var p of phones){
                    var prix = p.prix.replace(/[.,]/g,'')
                    prix = parseInt(prix);
                    if (p.name.toLowerCase().indexOf(keyword) !== -1 && prix > itemPrice)
                        result.push(p);   
                }
                if(order == 'asc')
                    result.sort(function(a, b){ return parseInt(a.prix.replace(/[.,]/g,'')) - parseInt(b.prix.replace(/[.,]/g,''))})
                if(order == 'dsc')
                    result.sort(function(a, b){ return parseInt(b.prix.replace(/[.,]/g,'')) - parseInt(a.prix.replace(/[.,]/g,''))}) 
                if(result.length !== 0)        
                    res.render('search_phone', {phones: result, keyword2});
                else    
                    throw new Error('Not found');
            })
            .catch(() => {
                res.render('error')
            })
            break;        
        }        
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
        }
    )
    res.redirect('/acceuil/'+name_phone)
}

const news=(req, res)=> {
    res.render('news');
}

const promo=(req, res)=> {
    res.render('promo');
}

module.exports = {
    homepage,
    detail,
    payer,
    search,
    type,
    sort,
    bill,
    post_comment,
    news,
    promo
}