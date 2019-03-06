var obj = {name: " kiran"};
var student = {name: " Ravi"};
var greeting = function(a,b,c){
    return "welcome" +this.name+" to "+a+" "+b+" in "+c;
}
var a = greeting.call(obj,"test1","test2","test3");
var b = greeting.call(student,"test1","test2","test3");
console.log(a);
console.log(b);
console.log(greeting.apply(obj,["123","234","fgh"]));   
let x = greeting.bind(obj,["SAi","absdf","Hello"],["123"],["345"]);
console.log(x());
