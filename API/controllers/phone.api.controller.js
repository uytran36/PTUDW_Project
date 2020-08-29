var phone = require('../../models/phone.model')

module.exports.index = async function(req,res){
    phone.find().then(function(phones)
    {
        res.json(phones)
    })
}

module.exports.FindPhone = async function(req, res)
{
    var name_phone = req.query.q;
    phone.find({name:name_phone}).then(function(phones)
    {
        res.json(phones)
    }
    )
}
module.exports.RelativePhone = async function(req, res){
    var name_phone = req.query.q.toLowerCase();
    var result = []
    phone.find().then(function(phones){
        for (var p of phones)
            if (p.name.toLowerCase().indexOf(name_phone) !== -1){  
                result.push(p);
            }
        return res.json(result);
    })
}