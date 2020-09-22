var btnXiaomi = document.getElementById('btnXiaomi');
var btnIphone = document.getElementById('btnIphone');
var btnSamsung = document.getElementById('btnSamsung');
var btnSony = document.getElementById('btnSony');
var Aasc = document.getElementById('Aasc');
var Ddsc = document.getElementById('Ddsc');
btnXiaomi.onclick = function(){
    localStorage.setItem('name_phone', 'xiaomi');
    location.href = '../type/xiaomi';
}

btnIphone.onclick = function(){
    localStorage.setItem('name_phone', 'iPhone');
    location.href = '../type/iPhone';
}

btnSamsung.onclick = function(){
    localStorage.setItem('name_phone', 'samsung');
    location.href = '../type/samsung';
}

btnSony.onclick = function(){
    localStorage.setItem('name_phone', 'sony');
    location.href = '../type/sony';
}
Aasc.onclick = function ascen(){
    location.href = '../type/' + localStorage.getItem('name_phone') + '?order=asc';
}
Ddsc.onclick = function descen(){
    location.href = '../type/' + localStorage.getItem('name_phone') + '?order=dsc';
}