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