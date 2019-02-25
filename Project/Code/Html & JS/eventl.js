(function(){
'use strict';
    var btn = document.getElementById("radioex");
btn.addEventListener('click',function(e){
    console.log(e);
    console.log(this);
})

var btn1 = document.getElementById("textex");
btn1.addEventListener('keypress',function(a){
     
    console.log(a.key);
    console.log(a);
    console.log(this);
    function validateInput(a,regex){  
       if(regex.test(a.key)){
    }
    else{
        a.preventDefault();
    }
}
validateInput(a,/^[A-Za-z]+$/);
})


})();