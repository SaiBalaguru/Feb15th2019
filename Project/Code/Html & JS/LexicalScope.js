function outer()
{
    var x = 10;
    return function()
    {
        console.log(x);
        //this.x = 10;
    };
}
    var exec = outer();
    var arr = !![]; //+ "false";
    console.log(arr);
    console.log(typeof arr);
    //console.log(exec);
    var abc = {};
    abc["my-name"] = "Kiran";
    console.log(abc["my-name"]);
