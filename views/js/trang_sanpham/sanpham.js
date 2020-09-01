
function Product(x)
{
    var name_phone = x.children[3].innerHTML;
    var url = 'http://localhost:3000/API/phone/search?q='+name_phone
    fetch(url,
        {
            method: 'GET'
        }).then(onResponse)
        .then(onJsonReady);

        function onResponse(res)
        {
            return res.json();
        }
        function onJsonReady(data)
        {
            location.href = "../acceuil/"+name_phone
        }
}

