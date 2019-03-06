// Array.prototype.even = function(){
// console.log(Array.prototype);
// };
// var user  = new Array();
// console.log(user instanceof Array);
// console.log(Object.prototype);
// console.log(Object.prototype.prototype);
// console.log(Object.isPrototypeOf(null));
// console.log(String.isPrototypeOf("Object"));
function f1(){

};
function  f2(){
};
function f3(){

};
// f3.prototype = Object.create(f1.prototype);
// f1.prototype.print = "Hello";
// var check = new f3();
// var check2 = new f1();
// console.log(f1.prototype);
// console.log(f3.prototype);
// console.log(f3.prototype.isPrototypeOf(check));
// console.log(f1.prototype.isPrototypeOf(check));
// console.log(f1.prototype.isPrototypeOf(f3));
// console.log(f1.prototype.isPrototypeOf(check2));
// console.log(f3.prototype.isPrototypeOf(check2));
// console.log(check.print);
// console.log(f3.prototype.print);
var obj1 = new Object();
var obj2 = new Object(obj1);
obj1.name = "kiran";
obj1.val = "This is Value";
console.log(obj1.hasOwnProperty("name"));
console.log(obj1.hasOwnProperty("constructor"));
console.log(obj2.hasOwnProperty("name"));
console.log(obj2.hasOwnProperty("val"));
console.log(obj2.val);

