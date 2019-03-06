function * powerSeries(number,power){
    let base = number;
    while(true){
        
        yield Math.pow(base,power);
        ++power;
    }
}
let powers = powerSeries(2,1);
var a = 0;
do
{
    a = powers.next().value;
    console.log(a);// Lazy Evaluation
         
}while(a<100);