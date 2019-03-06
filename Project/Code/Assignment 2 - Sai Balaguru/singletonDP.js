var printer = (function(){
    var printerInst;
    function create(){
        function print(){

        }
        function turnOn(){

        }
    }
    function singleton(){
        if(!printerInst){
            printerInst = initialize();
        }
    }
    return {
        getInst : function(){
            if(!printerInst){
                printerInst = create();
            }
        }
    }


})();