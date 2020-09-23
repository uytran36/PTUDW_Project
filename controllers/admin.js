

const { render } = require('pug');
const Home = (req, res) => {
    res.render('login');
};
const login = (req,res) => {
    res.render('admin');
};

module.exports = {
    Home,
    login
}