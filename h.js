var phone = [
    {id:1, name:'IPhone11 Promax'},
    {id:2, name:'Phone2'}
]

var _phone = phone.find(x=>x.name===id);
res.render('detail/detail', {phone1:_phone})