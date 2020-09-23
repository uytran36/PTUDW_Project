

var bill = require('../models/bill.model')
const { render } = require('pug');
const Home = (req, res) => {
    res.render('login');
};
const login = (req,res) => {
    bill.find().then(function(bill){
        if(bill.length == 0)
            throw new Error('Not found');
        res.render('admin', {bill: bill})
    })
    .catch(() => {
        res.render('notfound')
    })
};
const bill_detail = (req, res) => {
    var id = req.params.id;
    bill.find({_id:id}).then(function(bills){
        if(bills.length == 0)
            throw new Error('Not found');
        res.render('admin_detail_bill', {bill: bills[0]})
    })
    .catch(() => {
        res.render('notfound')
    })
    
}

module.exports = {
    Home,
    login,
    bill_detail
}