var form = document.getElementById("formSearch");
var btn05m = document.getElementById('0-5m');
var btn510m = document.getElementById('5-10m');
var btn10m = document.getElementById('10m');
var asc = document.getElementById('asc');
var dsc = document.getElementById('dsc');
var logo = document.getElementById('logo');
var navBarIphone11 = document.getElementById('navBarIphone11');
var navBarIphoneXS = document.getElementById('navBarIphoneXS');
var navBarIphoneX = document.getElementById('navBarIphoneX');
var navBarIphone8 = document.getElementById('navBarIphone8');
var navBarIphone7 = document.getElementById('navBarIphone7');
var navBarIphone6 = document.getElementById('navBarIphone6');
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
navBarIphone11.onclick = function(){
    localStorage.setItem('name_phone','iphone 11');
    localStorage.setItem('price','');
    location.href = '../search?keyword=' + localStorage.getItem('name_phone');
}
navBarIphoneXS.onclick = function(){
    localStorage.setItem('name_phone','iphone XS');
    localStorage.setItem('price','');
    location.href = '../search?keyword=' + localStorage.getItem('name_phone');
}
navBarIphoneX.onclick = function(){
    localStorage.setItem('name_phone','iphone X');
    localStorage.setItem('price','');
    location.href = '../search?keyword=' + localStorage.getItem('name_phone');
}
navBarIphone8.onclick = function(){
    localStorage.setItem('name_phone','iphone 8');
    localStorage.setItem('price','');
    location.href = '../search?keyword=' + localStorage.getItem('name_phone');
}
navBarIphone7.onclick = function(){
    localStorage.setItem('name_phone','iphone 7');
    localStorage.setItem('price','');
    location.href = '../search?keyword=' + localStorage.getItem('name_phone');
}
navBarIphone6.onclick = function(){
    localStorage.setItem('name_phone','iphone 6');
    localStorage.setItem('price','');
    location.href = '../search?keyword=' + localStorage.getItem('name_phone');
}
btn05m.onclick = function sort1(){
    localStorage.setItem('price', '0-5m');
    location.href = '../search/sort?keyword=' + localStorage.getItem('name_phone') + '&price=0-5m';
}
btn510m.onclick = function sort2(){
    localStorage.setItem('price', '5-10m');
    location.href = '../search/sort?keyword=' + localStorage.getItem('name_phone') + '&price=5-10m';
}
btn10m.onclick = function sort3(){
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


