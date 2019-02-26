class Student{
    constructor(){
        this.a = 123;
        this.b = 456;
        this.c = "Sai";
    }
    sample()
    {
        return this.a + this.b;
    }
}
let stu = new Student("sai","@345");
//stu.a = "Sai";
//stu.b = "S4fg";
stu.c = "123";
console.log(stu);
console.log(stu.sample());
class Department extends Student
{
    constructor(){
        super();
        console.log(this.a)
    }
}
let dept = new Department();
console.log(dept);
console.log(dept.a);
let m = new Map();
m.set("name","Sai");
m.set("name1","saibg");
m.forEach((v,k)=>{
    console.log(v);
    console.log(k);
})
console.log(m.size);
m.delete("name");// always deleting using the key value. 
m.forEach((v,k)=>{
    console.log(v);
    console.log(k);
})
let s = new Set();
s.add("Sai");
s.add("Bala");
s.add("Guru");
console.log(s);
s.forEach((v)=>{
console.log(v);
})
console.log("New Property");
var user = {
    name: "asd",
    age: 14,
    Gender: "Male"
}
var {name,age} = {...user};
console.log(name);
console.log(age);
var [a,b] = [1, 2] ;
console.log(a);
console.log(b);
