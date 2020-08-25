var btnSearch = document.getElementById("btn-search");
btnSearch.onclick = function(){
    var name_phone = document.getElementById("txtSearch").value;
    var url = 'http://localhost:3000/API/phone/search?q='+name_phone
    fetch(url,
        {
            method: 'GET'
        }).then(onResponse)
        .then(onJsonReady)

        function onResponse(res)
        {
            return res.json();
        }
        function onJsonReady(data)
        {
            location.href = "search/"+name_phone
        }
}