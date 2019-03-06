const iterableobj = {
    [symbol.iterator](){
        let step = 0;
        return{
            next() {
                step++;
                if(step===1)
                {
                    return {value: "this", done: false};
                }
                else if ((step===2)) 
                {
                    return{ value: "is", done: false};    
                }
                else if(step === 3)
                {
                    
                }
            }
        }
    }
}