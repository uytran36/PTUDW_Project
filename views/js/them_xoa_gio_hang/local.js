
var list_product = JSON.parse(localStorage.getItem('list_product'))
if(list_product == null)
    list_product =[]
var mua_ngay = document.getElementById("muangay")
function CreerObject(name, prix, count)
{
    var product = new Object();
    product.name = name;
    product.count = count;
    product.prix = prix;

    return product;
}

function CheckObjectInArr(arr, object)
{
    var dem = 0;
    for(items of arr)
    {
        if(items.name == object.name)
        {   
            dem++;
        }
    }
    if(dem == 0)
    {
        return true;
    }
    else
        return false;
}

//var acheter = document.getElementById('manager_product')
// acheter.addEventListener('click', function(even)
// {
//     console.log(even.target.parentNode)
// })
// acheter.addEventListener('click', function(even)
// {
//     console.log(even.target.parentNode)
// })
mua_ngay.onclick = function()
{
    // lấy thông tin điện thoại
    var node_name = document.getElementById("tensp1");
    var _name = node_name.innerHTML;
    var node_prix = document.getElementById("prix");
    var _prix = node_prix.innerHTML;
    var product = CreerObject(_name, _prix, 0)
    
    if(list_product.length == 0)
    {
        list_product.push(product)
        list_product[0].count = 1;
    }
    else
    {
        for(var i = 0; i < list_product.length; i++)
        {
            if(list_product[i].name == product.name)
            {
                    list_product[i].count+=1;
            }
            else if(CheckObjectInArr(list_product, product) == true)
            {
                list_product.push(product);
            }
        }
    } 
    
    var json_list_product = JSON.stringify(list_product)

    localStorage.setItem('list_product', json_list_product)
}

function Acheter(x)
{ 
    var _name = x.parentNode.children[0].children[3].innerHTML
    var _prix = x.parentNode.children[0].children[4].innerHTML

    var product = CreerObject(_name, _prix, 0)
    if(list_product.length == 0)
    {
        list_product.push(product)
        list_product[0].count = 1;
    }
    else
    {
        for(var i = 0; i < list_product.length; i++)
        {
            if(list_product[i].name == product.name)
            {
                    list_product[i].count+=1;
            }
            else if(CheckObjectInArr(list_product, product) == true)
            {
                list_product.push(product);
            }
        }
    } 
    
    var json_list_product = JSON.stringify(list_product)

    localStorage.setItem('list_product', json_list_product)
}
