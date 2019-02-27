//var a = 10;

(function(x){
   // 'use strict';
    var a = b = 3;
    console.log("This is outer");
    (function(c,d){
        console.log(c);
        console.log(d);
    })(a,b);
})(121212);