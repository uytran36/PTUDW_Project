var phone = require('../../models/phone.model')

module.exports.index = async function(req,res){
    phone.find().then(function(phones)
    {
        res.json(phones)
    })
}