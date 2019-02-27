var arr = [1,2,3,4,5,6,7,8,9,10];
(function(arr){
Array.prototype.even = function(){
    var arr2 = [];
    for(var i=0;i<this.length;i++)
    {
            if((this[i]%2) ==0)
            {
                arr2.push(this[i]);
            }
    }
    return arr2;
}
console.log(arr.even());
})(arr);
arr2 = [2,54,67,89,20,56,134];
var a = arr2.even();// Scope for Prototype becomes global.
console.log(a);