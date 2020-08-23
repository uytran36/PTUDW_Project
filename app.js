var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');
// database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/web_dienthoai')


var port =3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

var indexRoutes = require('./routes/index')
var payerRoutes = require('./routes/payer')
var APIPhoneRoute = require('./API/routes/phone.api.routes')

app.use('/acceuil', indexRoutes)
app.use('/', payerRoutes);
app.use('/API/phone', APIPhoneRoute)

app.listen(port, function()
{
    console.log('Server listening on port ' + port);
})

