//var x = document.getElementById("input1");
//console.log(x.value);

function hello()
{
    var myname = "Sai";
    console.log("outsideFunction");
    this.myname = "saiOut"
    this.fullname = new function()
    {
        this.myname = "123"
        this.abc = 10;
        console.log("InsideFunction");
        console.log(myname + this.myname); 
    }
}
var y = new hello();
console.log(y.fullname);
console.log(y.myname);