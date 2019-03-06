function * generatorFunction(){
    console.log("This is to be Exeduted 1st");
    yield "hello,";
    console.log(" I will be printed after a pause");
    //yield "world,";
    yield hello1();
    console.log("Pause here");
    yield "3rd yield";
}
const genObj = generatorFunction();
console.log(genObj.next().value);// next goes to the 
console.log(genObj.next().value);
console.log(genObj.next().value);
function hello1()
{
    
    console.log("Hello from outside");
    return "Return value is printed due to .value() function"
}
