
function Product(x)
{
    fetch('http://localhost:3000/API/phone',
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
            var name_phone = x.children[3].innerHTML;
            for(items of data)
            {
                // if(items.name == name_phone)
                // {
                //     x.href = "/acceuil/1";
                // }
                // if(items.name == name_phone)
                // {
                //     console.log();
                // }
                console.log(items);
            }
            
        }
}