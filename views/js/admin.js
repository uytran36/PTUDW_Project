var log = document.getElementById('log');

log.onclick = function(){
    var acc = document.getElementById('acc').value;
    var pass = document.getElementById('pass').value;
    if(acc == 'admin' && pass == '123')
        location.href = './admin/loggedin';
}