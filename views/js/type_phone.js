var btnXiaomi = document.getElementById('btnXiaomi');
var btnIphone = document.getElementById('btnIphone');
var btnSamsung = document.getElementById('btnSamsung');
var btnSony = document.getElementById('btnSony');

btnXiaomi.onclick = function(){
    localStorage.setItem('name_phone', 'xiaomi');
    location.href = '../type/xiaomiMI';
}

btnIphone.onclick = function(){
    localStorage.setItem('name_phone', 'iphone');
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