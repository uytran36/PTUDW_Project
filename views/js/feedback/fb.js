feedback()
function feedback()
{
    var name_phone = document.getElementById("tensp1");
    var url = 'http://localhost:3000/API/phone/search?q='+ name_phone.innerHTML
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
            var comment = document.getElementById("rowhiendg");
            var html='';
            for(var item of data[0].feedback)
            {
                var rating = '';
                var no_rating = '';
                for(var i = 0; i < Number(item.rating); i++)
                {
                    rating +=  ' <i class="fa fa-star"></i>';
                }
                for(var i = 0; i < 5-Number(item.rating); i++)
                {
                    no_rating += '<i class="fa fa-star-o" id="staro4"></i>'
                }
                html +=  '<div>  '  + 
                '                   <h6>'+item.name+'</h6>  '  + 
                '                   <span>  '  + 
                '                     <p>  '  + 
                rating + no_rating+ '<br>'+ item.binhluan+'    </p>'  + 
                '                   </span>  '  + 
                '                </div>'  
            }

            comment.innerHTML = html;
            
        }
}
