var a = document.getElementById("value1");
var b = document.getElementById("value3");
var c = document.getElementsById("value4");
var d = document.getElementsById("value5");

function clicker()
{
  /*console.log(a.value);
  console.log(b.value);
  console.log(c.value);*/
  var arr = [a.value, b.value];
  var obj1 = {a1 : arr };
console.log(obj1);
return obj1;
}
console.log( clicker()); 