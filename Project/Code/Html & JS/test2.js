var a = 10;
function add(n){
    console.log(a);
    var a = 15;
    return (a+n);

}
console.log(add(12));
console.log((typeof null));
var arr = new Array("name","gender");
console.log(arr);
var b = [1,,2];
console.log(b[1]);
(function outerFunc(outerArg) {

    var outerVar = 'a';
    
    
    (function innerFunc(innerArg) {
    
    var innerVar = 'b';
    
    
    
    console.log(outerArg);
    console.log(innerArg);
    
    })(456);
    })(123);
    function fad()
    {
        return { a: "Hello"};
    }
    console.log(fad());


    