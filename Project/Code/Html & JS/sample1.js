(function(){
'use strict';

var initValue;
initValue = 10;
function counter(callback)
{
    if(initValue > 0)
    {
        console.log(initValue);
        initValue--;
        callback(callback);
    }
}
function init(cb)
{
    cb(cb);
}
init(counter);
console.log(1+"1"+1);
var x = (function(){
    window.c = "This is a Global Variable in the Immediate Function";
    return "This is an Immediate Function";
})();
console.log(x);
console.log(c);
})();