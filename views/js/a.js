var arr =[{name:"minh", age:18}, {name:"hihi",age:19}]
for( var i = 0; i < arr.length; i++){ 
    if ( arr[i].name === "hihi") {
      arr.splice(i, 1); 
    }
}
console.log(arr)