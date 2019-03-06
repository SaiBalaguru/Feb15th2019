var x = (function(){
    var content = "contents";
    var changeHTML = function(){
       // var element = document.getElementById('attribute-to-change');
        //element.innerHTML = '';
        console.log("THis is the called functiom");
    }
    return{
        objFunc: function(){
            changeHTML();
            console.log(content);
        }
    }
})();
console.log(x.objFunc());
