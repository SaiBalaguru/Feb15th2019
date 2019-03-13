// let a = {
//     ask: true
// }
// let b = {
//     tell: false,
//     __proto__: a,
// }
// alert(b.tell);
// alert(b.ask);   // Normal use of Prototype
// var parent,child;
//  parent = {
//     give: "I am the Parent",
// } 
//  child = {
//     take: "I am the Child",
// }
// parent.__proto__ = child;
// child.__proto__ = parent; // This is a limitation as it causes Cyclic Prototype Error
// console.log(parent.take);
// console.log(child.take);
// console.log(parent.give);
// console.log(child.give);
// parent = {
//         give: "I am the Parent",
    
//     } 
//      child = {
//         take: "I am the Child",
//     }
//     // parent.__proto__ = null;
//     // parent.__proto__ = true;
//     parent.__proto__.sample = "I am inside Parent's Proto";
//     child.__proto__ = parent;
//     console.log(parent.__proto__);
//     console.log(child.give);
//     console.log(parent);
//     console.log(child);
//     parent.__proto__.toString = null;
//     child.__proto__.toString = null;
//     console.log(Object.prototype);// PArent of all object's prototype, that is "Object"
var person = {
    name1: "Sai",
    name2: "Guru",
    set fullname(value){
        [this.name1, this.name2] = value.split(" ");
    },
    get fullname(){
        //return `${this.name1} ${this.name2}`;
        return (this.name1+" "+this.name2);
    },
};
var admin = {
    __proto__:person,
    isAdmin: true,
};
alert(admin.fullname);
person.fullname = "Sai Balaguru";
alert(admin.fullname);
function obj1(){
    this.a = "This is the constructor based refernce";
    this.prototype = person;
}
var ob = new obj1();
console.log(ob);
