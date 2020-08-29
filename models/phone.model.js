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


var phoneSchema = new mongoose.Schema({
    name: String,
    prix: String,
    type: String,
    type_concrete: String,
    img: String,
    operating_system: String,
    screen_size: String,
    camera_sau: String,
    camera_truoc: String,
    CPU: String,
    RAM: String,
    memoire: String, 
    do_phan_giai: String,
    dung_luong_pin: String,
    feedback: [{rating:String, name: String, binhluan: String, mail:String}]
});

var phone = mongoose.model('phone', phoneSchema, 'phone');


module.exports = phone;