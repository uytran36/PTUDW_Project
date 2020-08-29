var total = localStorage.getItem('Total')
var list_product = JSON.parse(localStorage.getItem('list_product'))
bill()
function bill()
{
    var bill_total = document.getElementById("bill_total");
    var _bill_total = document.getElementById("_total");
    bill_total.innerHTML =  'Tổng cộng: <br><strong style="color:red">'+total+'₫</strong>';
    _bill_total.innerHTML = total+'₫';
    var html = '';
    var tbody = document.getElementById('tbody');
    for(i = 0; i < list_product.length; i++)
    {
        html+= '    <tr class="order_items">  '  + 
        '                                       <td class="product_name">  '  + 
        '                                           <a href="#" style="color:black">'+list_product[i].name+'</a>  '  + 
        '                                           <strong>x'+ list_product[i].count +'</strong>  '  + 
        '                                       </td>  '  + 
        '                                       <td class="price" style="color:red">'+list_product[i].prix+'₫</td>  '  + 
        '                                  </tr>  ' ; 
    }
    tbody.innerHTML = html;
}

localStorage.removeItem('list_product')
localStorage.removeItem('Total')