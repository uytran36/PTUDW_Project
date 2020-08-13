
function SendFB(){
  var name = document.getElementById('namenx').value; //gọi tên
  var text = document.getElementById('textnx').value; //gọi nội dung fb
 
  //gọi từng sao
  var star5 = document.getElementById('star5');
  var star4 = document.getElementById('star4'); 
  var star3 = document.getElementById('star3'); 
  var star2 = document.getElementById('star2'); 
  var star1 = document.getElementById('star1'); 

  //tạo tên
  var h6 = document.createElement('h6');
  var nodeh6 = document.createTextNode(name);
  h6.appendChild(nodeh6);

  //tạo feedback
  var div2 = document.createElement('div');
  var p = document.createElement('p');
  var nodep = document.createTextNode(text);
  p.appendChild(nodep);
  div2.appendChild(p);

  //tạo sao
  var div1 = document.createElement('div');
  //sao đầy
  var sf1 = document.getElementById('starf1');
  var sf2 = document.getElementById('starf2');
  var sf3 = document.getElementById('starf3');
  var sf4 = document.getElementById('starf4');
  var sf5 = document.getElementById('starf5');
  // sao rỗng
  var so1 = document.getElementById('staro1');
  var so2 = document.getElementById('staro2');
  var so3 = document.getElementById('staro3');
  var so4 = document.getElementById('staro4');
  //chia trường hợp của sao
  if(star5 == '5' )
  {
    div1.appendChild(sf1);
    div1.appendChild(sf2);
    div1.appendChild(sf3);
    div1.appendChild(sf4);
    div1.appendChild(sf5);
  }

  if(star4 == '4' )
  {
    div1.appendChild(sf1);
    div1.appendChild(sf2);
    div1.appendChild(sf3);
    div1.appendChild(sf4);
    div1.appendChild(so1);
  } 
  
  if(star3 == '3' )
  {
    div1.appendChild(sf1);
    div1.appendChild(sf2);
    div1.appendChild(sf3);
    div1.appendChild(so2);
    div1.appendChild(so1);
  } 

  if(star2 == '2' )
  {
    div1.appendChild(sf1);
    div1.appendChild(sf2);
    div1.appendChild(so3);
    div1.appendChild(so2);
    div1.appendChild(so1);
  } 

  if(star1 == '1' )
  {
    div1.appendChild(sf1);
    div1.appendChild(so4);
    div1.appendChild(so3);
    div1.appendChild(so2);
    div1.appendChild(so1);
  } 
  //còn vụ in sao lên chưa được
  //in ra html
  var addfb = document.getElementById('addfb');
  addfb.appendChild(h6);
  addfb.appendChild(div1);
  addfb.appendChild(div2);
  
}