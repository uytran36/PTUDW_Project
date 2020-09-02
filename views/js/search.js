var form = document.getElementById("formSearch");
var btn05m = document.getElementById('0-5m');
var btn510m = document.getElementById('5-10m');
var btn10m = document.getElementById('10m');
form.onsubmit = function(){
    var name_phone = document.getElementById("txtSearch").value;
    localStorage.setItem('name_phone', name_phone);
    if(name_phone !== '')
        form.action = '../search';
    else
    {
        form.action = '../acceuil';
    }
}
btn05m.onclick = function sort1(){
    location.href = '../search/sort?keyword=' + localStorage.getItem('name_phone') + '&price=0-5m';
}
btn510m.onclick = function sort2(){
    location.href = '../search/sort?keyword=' + localStorage.getItem('name_phone') + '&price=5-10m';
}
btn10m.onclick = function sort3(){
    location.href = '../search/sort?keyword=' + localStorage.getItem('name_phone') + '&price=10m';
}

