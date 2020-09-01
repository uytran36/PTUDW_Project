var btnXiaomi = document.getElementById('btnXiaomi');
var btnIphone = document.getElementById('btnIphone');
var btnSamsung = document.getElementById('btnSamsung');
var btnSony = document.getElementById('btnSony');

btnXiaomi.onclick = function(){
    location.href = '../search/xiaomiMI';
}

btnIphone.onclick = function(){
    location.href = '../search/iPhone';
}

btnSamsung.onclick = function(){
    location.href = '../search/samsung';
}

btnSony.onclick = function(){
    location.href = '../search/sony';
}