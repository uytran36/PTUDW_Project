var form = document.getElementById("formSearch");
var btn05m = document.getElementById('0-5m');
var btn510m = document.getElementById('5-10m');
var btn10m = document.getElementById('10m');
var asc = document.getElementById('asc');
var dsc = document.getElementById('dsc');
var logo = document.getElementById('logo');

logo.onclick = function(){
    localStorage.clear();
    localStorage.setItem('price', '');
}
form.onsubmit = function(){
    var name_phone = document.getElementById("txtSearch").value;
    localStorage.setItem('name_phone', name_phone);
    localStorage.setItem('price', '');
    if(name_phone !== '')
        form.action = '/search';
    else
    {
        localStorage.clear();
        form.action = '../acceuil';
    }
}
btn05m.onclick = function sort1(){
    if(localStorage.getItem('name_phone') == 'xiaomiMI')
        localStorage.setItem('name_phone', 'xiaomi');
    localStorage.setItem('price', '0-5m');
    location.href = '../search/sort?keyword=' + localStorage.getItem('name_phone') + '&price=0-5m';
}
btn510m.onclick = function sort2(){
    if(localStorage.getItem('name_phone') == 'xiaomiMI')
        localStorage.setItem('name_phone', 'xiaomi');
    localStorage.setItem('price', '5-10m');
    location.href = '../search/sort?keyword=' + localStorage.getItem('name_phone') + '&price=5-10m';
}
btn10m.onclick = function sort3(){
    if(localStorage.getItem('name_phone') == 'xiaomiMI')
        localStorage.setItem('name_phone', 'xiaomi');
    localStorage.setItem('price', '10m');
    location.href = '../search/sort?keyword=' + localStorage.getItem('name_phone') + '&price=10m';
}
asc.onclick = function ascen(){
    var price = localStorage.getItem('price');
    if(price == '')
        location.href = '../search?keyword=' + localStorage.getItem('name_phone') + '&order=asc';
    else
        location.href = '../search/sort?keyword=' + localStorage.getItem('name_phone') + '&price=' + price + '&order=asc';
}
dsc.onclick = function descen(){
    var price = localStorage.getItem('price');
    if(price == '')
        location.href = '../search?keyword=' + localStorage.getItem('name_phone') + '&order=dsc';
    else
        location.href = '../search/sort?keyword=' + localStorage.getItem('name_phone') + '&price=' + price + '&order=dsc';
}

