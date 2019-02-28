(function(){
    'use strict';
    var a = "abcdefghdfhhjkhvfg"; //Input String;
    var clip = function(temp){
         var a = temp.substr(1).slice(0,-1);
        return a;
    }
    console.log(clip(a));
})();