function validateEmail(email) 
  {
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

  return re.test(email);
  }
  function page()
  {
    
  String.prototype.isNumber = function(){return /^\d+$/.test(this);}
  var name = document.getElementById("validationDefault01")
  var number_phone = document.getElementById("validationDefault02")
  var email = document.getElementById("validationDefault03")
  var city = document.getElementById("billing_city")
  var address = document.getElementById("validationDefault04")
  var str = [];
  str.push(name)
  str.push(number_phone)
  str.push(email)
  str.push(address)
  str.push(city)
  var placeholder = []
  for(var items of str)
  {
  if(items.value == '')
  {
  placeholder.push(items.placeholder)
  }
  }
  console.log(placeholder)
  var error = '';
  var dem = 0;
  var dem1 = 0; 
  for(var i = 0; i< str.length; i++)
  {
    dem1++;
    if(str[i].value == '')
    {
      if(dem1 == 5)
      {
        error += '                           <li>  '  +
  '                               <strong><span style="color:red">'+'Tỉnh/ Thành phố '+'</span>: là mục bắc buộc phải nhập '  +
  '                           </li>  ';
        dem++;
      }
      else
      {
       error += '                           <li>  '  +
  '                               <strong><span style="color:red">'+str[i].placeholder+'</span>: là mục bắc buộc phải nhập '  +
  '                           </li>  ';
      dem++;
      }
    }
    else if(str[i].placeholder == 'Điện thoại')
    {
      if(str[i].value.isNumber() != true)
      {
        error += '                           <li>  '  +
        '                               <strong><span style="color:red">'+str[i].placeholder+'</span>: số điện thoại không được chứa ký tự '  +
        '                           </li>  ';
        dem++;
      }
      else if(str[i].value.length > 11)
      {
        error += '                           <li>  '  +
        '                               <strong><span style="color:red">'+str[i].placeholder+'</span>: số điện thoại phải ít hơn 12 ký tự '  +
        '                           </li>  ';
        dem++;
      }
      else if(str[i].value.length < 9 )
      {
        error += '                           <li>  '  +
        '                               <strong><span style="color:red">'+str[i].placeholder+'</span>: số điện thoại phải có ít nhất 9 ký tự '  +
        '                           </li>  ';
        dem++;
      }
    }
    else if (str[i].placeholder == 'Email')
    {
      if(validateEmail(str[i].value) == false)
      {
        error += '                           <li>  '  +
        '                               <strong><span style="color:red">'+str[i].placeholder+'</span>: không hợp lệ (@email.com) '  +
        '                           </li>  ';
        dem++;
      }
    }
    
    
  }
  var alert = document.getElementById("_warning");
  var html =  '   <div class="warning">  '  +
  '                       <ul class="alert">  '  +
  error
  '                       </ul>  '  +
  '                  </div>  ' ;
  alert.innerHTML = html;
  if(dem == 0)
  location.href='/bill'
  }