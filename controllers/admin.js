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

module.exports = {
    Home,
    login,
    loggedin,
    logout
}