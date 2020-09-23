var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/web_dienthoai', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('open', function()
{
    console.log('Connect success!')
})
mongoose.connection.on('error', function(err)
{
    console.log('err')
})


var billSchema = new mongoose.Schema({
    name: String,
    address: String,
    number_phone: String,
    city: String,
    email: String,
    note: String,
    list_product: [{name:String, count: Number, prix:String}],
    total: String,
    time: String
});


var bill = mongoose.model('bill', billSchema, 'bill');




module.exports = bill;
