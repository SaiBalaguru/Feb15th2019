var arr = [1,2,3,4,5,6,7,8,9,10];
console.log("Conventional Way");
var val = arr.filter((x,i)=>{
    return x%2==0;
})
console.log(val);
console.log("Shorthand way");
var val1 = arr.filter(x=>x%2!=0);
console.log(val1);
const x = 10;
console.log(x);
const a = {
    x: 10 // Since objects are refernce variables, const with an object is meaningless.
}
a.x = 20;
console.log(a);