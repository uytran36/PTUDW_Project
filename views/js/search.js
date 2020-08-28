var form = document.getElementById("formSearch");
form.onsubmit = function(){
    var name_phone = document.getElementById("txtSearch").value;
    if(name_phone !== '')
        form.action = 'search';
    else
    {
        form.action = 'acceuil';
    }
}

