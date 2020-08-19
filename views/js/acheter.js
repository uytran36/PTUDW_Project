
document.getElementById("ship-checkbox").onclick = function(e)
{
    if(this.checked)
    {
       var info_html = document.getElementById("info_other");
       var html = "";
       html =   '    <div id="info5">  '  + 
       '                               <span class="input-wrapper"><input type="text" class="input-text "  id="billing_last_name" placeholder="Họ và tên" value="" style="width:45%"></span>    '  + 
       '                               <span class="input-wrapper"><input type="tel" class="input-text "  id="billing_phone" placeholder="Điện thoại" value="" autocomplete="tel" style="width:51.6%; margin-left:2%"></span>  '  + 
       '                           </div>  '  + 
       '                           <div id="info6">  '  + 
       '                               <span class="input-wrapper" style="width:100%;"><input type="text" class="input-text "  id="billing_last_name" placeholder="Email" value="" style="width:99.5%"></span>  <span class="input-wrapper">  '  + 
       '                           </div>  '  + 
       '                           <div id="info7">  '  + 
       '                               <span class="input-wrapper"><select id="billing_city" class="select " autocomplete="address-level2" data-allow_clear="true" data-placeholder="Tỉnh / Thành phố"  style="width:99.5%">  '  + 
       '                                   <option value="" selected="selected">Tỉnh / Thành phố</option><option value="An Giang">An Giang</option><option value="Vũng Tàu">Vũng Tàu</option><option value="Bắc Giang">Bắc Giang</option><option value="Bắc Kạn">Bắc Kạn</option><option value="Bạc Liêu">Bạc Liêu</option><option value="Bắc Ninh">Bắc Ninh</option><option value="Bến Tre">Bến Tre</option><option value="Bình Định">Bình Định</option><option value="Bình Dương">Bình Dương</option><option value="Bình Phước">Bình Phước</option><option value="Bình Thuận">Bình Thuận</option><option value="Cà Mau">Cà Mau</option><option value="Cần Thơ">Cần Thơ</option><option value="Cao Bằng">Cao Bằng</option><option value="Đà Nẵng">Đà Nẵng</option><option value="Đắk Lắk">Đắk Lắk</option><option value="Đắk Nông">Đắk Nông</option><option value="Điện Biên">Điện Biên</option><option value="Đồng Nai">Đồng Nai</option><option value="Đồng Tháp">Đồng Tháp</option><option value="Gia Lai">Gia Lai</option><option value="Hà Giang">Hà Giang</option><option value="Hà Nam">Hà Nam</option><option value="Hà Nội">Hà Nội</option><option value="Hà Tĩnh">Hà Tĩnh</option><option value="Hải Dương">Hải Dương</option><option value="Hải Phòng">Hải Phòng</option><option value="Hậu Giang">Hậu Giang</option><option value="Hòa Bình">Hòa Bình</option><option value="Hồ Chí Minh">Hồ Chí Minh</option><option value="Hưng Yên">Hưng Yên</option><option value="Khánh Hòa">Khánh Hòa</option><option value="Kiên Giang">Kiên Giang</option><option value="Kon Tum">Kon Tum</option><option value="Lai Châu">Lai Châu</option><option value="Lâm Đồng">Lâm Đồng</option><option value="Lạng Sơn">Lạng Sơn</option><option value="Lào Cai">Lào Cai</option><option value="Long An">Long An</option><option value="Nam Định">	Nam Định</option><option value="Nghệ An">Nghệ An</option><option value="Ninh Bình">Ninh Bình</option><option value="Ninh Thuận">Ninh Thuận</option><option value="Phú Thọ">Phú Thọ</option><option value="Phú Yên">Phú Yên</option><option value="Quảng Bình">Quảng Bình</option><option value="Quảng Nam">Quảng Nam</option><option value="Quảng Ngãi">Quảng Ngãi</option><option value="Quảng Ninh">Quảng Ninh</option><option value="Quảng Trị">Quảng Trị</option><option value="Sóc Trăng">Sóc Trăng</option><option value="Sơn La">Sơn La</option><option value="Tây Ninh">Tây Ninh</option><option value="Thái Bình">Thái Bình</option><option value="Thái Nguyên">Thái Nguyên</option><option value="Thanh Hóa">Thanh Hóa</option><option value="Thừa Thiên Huế">Thừa Thiên Huế</option><option value="Tiền Giang">Tiền Giang</option><option value="Trà Vinh">Trà Vinh</option><option value="Tuyên Quang">Tuyên Quang</option><option value="Vĩnh Long">Vĩnh Long</option><option value="Vĩnh Phúc">Vĩnh Phúc</option><option value="Yên Bái">Yên Bái</option>  '  + 
       '                               </select></span>  '  + 
       '                           </div>  '  + 
       '                           <div id="info8">  '  + 
       '                               <span class="input-wrapper" style="width:100%"><input type="text" class="input-text "  id="billing_last_name" placeholder="Số nhà, tên đường, phường/ xã" value="" style="width:99.5%"></span>  <span class="input-wrapper">  '  + 
       '                          </div>  ' ; 
       console.log(html);
        info_html.innerHTML = html;
    }
    else 
    {
        var el1 = document.getElementById("info5");
        var el2 = document.getElementById("info6");
        var el3 = document.getElementById("info7");
        var el4 = document.getElementById("info8");
        el1.remove();
        el2.remove();
        el3.remove();
        el4.remove();  
        
    }
}
var list_product = JSON.parse(localStorage.getItem('list_product'))
HienThiDanhSach()


function HienThiDanhSach()
{ 
    var bill = document.getElementById("menu_product")
    var html = '';
    var total = [];
    console.log(list_product)
    for(i = 0; i < list_product.length; i++)
    {
        html+='   <tr class="product_1" >  '  + 
        '                                       <td><a href="" class="remove" aria-label="Xóa sản phẩm này" data-product_id="" data-product_sku="" id="delete" onclick="xoa(this)">×</a></td>  '  + 
        '                                       <td class="product-name" id ="namehihi"><span>'  + list_product[i].name + '</span><strong class="product-quantity">&nbsp;×'+ list_product[i].count +'</strong><br></td>  '  + 
        '                                       <td class="product-total">  '  + 
        '                                       <span class="prix">'+ list_product[i].prix+'&nbsp;<span class="class_prix">₫</span></span></td>  '  + 
        '                                  </tr>  ' ; 
        total.push(Number(list_product[i].prix.split('.').join(''))*list_product[i].count);
    }
    _total = total.reduce((a,b)=>a+b,0)
    console.log(_total)
    var string_total =_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var total_prix = document.getElementById("total_order");
    total_prix.innerHTML =  '   <th colspan="2">Tổng</th>  '  + 
    '                      <td><strong><span class="_Price" style="color:red;font-size:18px">'+string_total+'&nbsp;<span class="_Price">₫</span></span></strong></td>  ' ; 
    bill.innerHTML = html;
};

function xoa(x)
{
    var par = x.parentNode.parentNode;
    var name_phone = par.children[1].children[0].innerHTML;
    for(var i = 0; i < list_product.length; i++)
    {
       if(list_product[i].name == name_phone)
       {
            list_product[i].count -=1;
            if(list_product[i].count == 0)
            {
                list_product.splice(i, 1); 
            }
       }
    }
    var json_list_product = JSON.stringify(list_product)
    localStorage.setItem('list_product', json_list_product)
}

CheckArrayNull()
function CheckArrayNull()
{
    var content = document.getElementById('payer_minh');
    if(list_product.length == 0)
    {
        content.remove();
    }
}