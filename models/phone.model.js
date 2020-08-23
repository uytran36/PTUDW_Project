var mongoose = require('mongoose')

var phoneSchema = new mongoose.Schema({
    name:String,
    prix:String,
    img:String,
    operating_system:String,
    screen_size: String,
    camera_sau:String,
    camera_truoc:String,
    CPU:String,
    RAM:String,
    memorie:String,
    do_phan_giai:String,
    dung_luong_pin:String,
});
var phone = mongoose.model('phone', phoneSchema, 'phone');

module.exports = phone;