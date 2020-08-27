
// function SendFB(){
//   var name = document.getElementById('namenx').value; //gọi tên
//   var text = document.getElementById('textnx').value; //gọi nội dung fb

// const e = require("express");

 
//   //gọi từng sao
//   var star5 = document.getElementById('star5');
//   var star4 = document.getElementById('star4'); 
//   var star3 = document.getElementById('star3'); 
//   var star2 = document.getElementById('star2'); 
//   var star1 = document.getElementById('star1'); 

//   //tạo tên
//   var h6 = document.createElement('h6');
//   var nodeh6 = document.createTextNode(name);
//   h6.appendChild(nodeh6);

//   //tạo feedback
//   var div2 = document.createElement('div');
//   var p = document.createElement('p');
//   var nodep = document.createTextNode(text);
//   p.appendChild(nodep);
//   div2.appendChild(p);

//   //tạo sao
//   var div1 = document.createElement('div');
//   //sao đầy
//   var sf1 = document.getElementById('starf1');
//   var sf2 = document.getElementById('starf2');
//   var sf3 = document.getElementById('starf3');
//   var sf4 = document.getElementById('starf4');
//   var sf5 = document.getElementById('starf5');
//   // sao rỗng
//   var so1 = document.getElementById('staro1');
//   var so2 = document.getElementById('staro2');
//   var so3 = document.getElementById('staro3');
//   var so4 = document.getElementById('staro4');
//   //chia trường hợp của sao
//   if(star5 == '5' )
//   {
//     div1.appendChild(sf1);
//     div1.appendChild(sf2);
//     div1.appendChild(sf3);
//     div1.appendChild(sf4);
//     div1.appendChild(sf5);
//   }

//   if(star4 == '4' )
//   {
//     div1.appendChild(sf1);
//     div1.appendChild(sf2);
//     div1.appendChild(sf3);
//     div1.appendChild(sf4);
//     div1.appendChild(so1);
//   } 
  
//   if(star3 == '3' )
//   {
//     div1.appendChild(sf1);
//     div1.appendChild(sf2);
//     div1.appendChild(sf3);
//     div1.appendChild(so2);
//     div1.appendChild(so1);
//   } 

//   if(star2 == '2' )
//   {
//     div1.appendChild(sf1);
//     div1.appendChild(sf2);
//     div1.appendChild(so3);
//     div1.appendChild(so2);
//     div1.appendChild(so1);
//   } 

//   if(star1 == '1' )
//   {
//     div1.appendChild(sf1);
//     div1.appendChild(so4);
//     div1.appendChild(so3);
//     div1.appendChild(so2);
//     div1.appendChild(so1);
//   } 
//   //còn vụ in sao lên chưa được
//   //in ra html
//   var addfb = document.getElementById('addfb');
//   addfb.appendChild(h6);
//   addfb.appendChild(div1);
//   addfb.appendChild(div2);
  
// }


    
// document.getElementById("star5").onclick = function(e)
// {
//     var html = '';
//     if(this.checked)
//     {
//         html =  '   <div>  '  + 
//         '                   <h6>HY</h6>  '  + 
//         '                   <span>  '  + 
//         '                     <p>  '  + 
//         '                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  '  + 
//         '                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>  '  + 
//         '                       </svg>  '  + 
//         '                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  '  + 
//         '                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>  '  + 
//         '                       </svg>  '  + 
//         '                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  '  + 
//         '                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>  '  + 
//         '                       </svg>  '  + 
//         '                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  '  + 
//         '                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>  '  + 
//         '                       </svg>  '  + 
//         '                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  '  + 
//         '                         <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>  '  + 
//         '                       </svg>  '  + 
//         '                       Máy thiết kế đẹp, mượt, nhiều tính năng, màu sắc ổn, camera khá, chụp không đẹp trong môi trường thiếu sáng, camera lồi dễ trầy xước, sạc pin nhanh (không nhanh bằng VOOC) trung bình 1 phút được 1%, sử dụng liên tục tầm 12 tiếng (độ sáng thấp) chế độ tối màu tầm 13 tiếng.</p>  '  + 
//         '                   </span>  '  + 
//         '                </div>  ' ;  ; 
//     }
//     localStorage.setItem('star', html);
// }


   
    // var html = '';

// function feedback(even) {
//     var db = document.getElementById("rowhiendg")
//     var html = '';
//     html =  '   <div>  '  + 
//     '                   <h6>HY</h6>  '  + 
//     '                   <span>  '  + 
//     '                     <p>  '  + 
//     '                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  '  + 
//     '                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>  '  + 
//     '                       </svg>  '  + 
//     '                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  '  + 
//     '                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>  '  + 
//     '                       </svg>  '  + 
//     '                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  '  + 
//     '                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>  '  + 
//     '                       </svg>  '  + 
//     '                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  '  + 
//     '                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>  '  + 
//     '                       </svg>  '  + 
//     '                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  '  + 
//     '                         <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>  '  + 
//     '                       </svg>  '  + 
//     '                       Máy thiết kế đẹp, mượt, nhiều tính năng, màu sắc ổn, camera khá, chụp không đẹp trong môi trường thiếu sáng, camera lồi dễ trầy xước, sạc pin nhanh (không nhanh bằng VOOC) trung bình 1 phút được 1%, sử dụng liên tục tầm 12 tiếng (độ sáng thấp) chế độ tối màu tầm 13 tiếng.</p>  '  + 
//     '                   </span>  '  + 
//     '                </div>  ' ; 
//     console.log(even.target);
//     var a=  '   <input data-id="1" type="radio" id="star5" name="rating" value="5" />  '  + 
//     '                    <label class = "full" for="star5" title="Awesome - 5 stars"></label>  ' ; 
//     // if(even.target ==  a)
//     // {
//     //     console.log("HIHI")
//     // }
//     // else
//     //     console.log('hihi');
//     console.log(JSON.stringify(even.target) == a);
    

// }


