
// var bill = require('../models/bill.model');
const { render } = require('pug');

const Home = (req, res) => {
    if(req.session.isLoggedIn)
        res.render('admin');
    else
        res.render('login');
};
const loggedin = (req,res) => {
    if(req.param('uname') == 'admin' && req.param('psw') == '123'){
        req.session.isLoggedIn = true;
        res.redirect('/admin/loggedIn');
    }
    else{
        req.session.isLoggedIn = false;
        res.redirect('/admin');
    }
};
const login = (req,res) => {
    if(req.session.isLoggedIn)
        res.render('admin');
    else
        res.redirect('/admin');
};
const logout = (req,res) => {
    req.session.isLoggedIn = false;
	res.redirect('/admin');
}
    // bill.find().then(function(bill){
    //     if(bill.length == 0)
    //         throw new Error('Not found');
    //     res.render('admin', {bill: bill})
    // })
    // .catch(() => {
    //     res.render('notfound')
    // })

// const bill_detail = (req, res) => {
//     var id = req.params.id;
//     bill.find({_id:id}).then(function(bills){
//         if(bills.length == 0)
//             throw new Error('Not found');
//         res.render('admin_detail_bill', {bill: bills[0]})
//     })
//     .catch(() => {
//         res.render('notfound')
//     })
// }

module.exports = {
    Home,
    login,
    loggedin,
    logout,
    //bill_detail
}