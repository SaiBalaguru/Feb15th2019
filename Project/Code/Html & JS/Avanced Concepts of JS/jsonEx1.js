var a = '{"name":"Kiran"}';
//console.log(JSON.parse(a));
var ob = JSON.stringify(a);
console.log(ob);
var b = JSON.parse(a);
console.log(b.name);
