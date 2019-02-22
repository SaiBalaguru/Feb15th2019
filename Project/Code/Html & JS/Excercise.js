/*function bookTicket(mode)
{
    var discount = mode == 'flight' ? 10 : mode == 'cruise' ? 20 :
                   mode == 'train'  ? 30 : 0;
                   
                   return function (source, destination)
                   {
                       var price = Math.floor((Math.random() * 1000) + 1);
                        console.log('source:'+source);
                        console.log('Destination: '+destination);
                        console.log('Price: '+price);
                        console.log('Discount: '+price*(discount/100));
                   };
}
var flight = bookTicket('flight');
var train = bookTicket('train');
var cruise = bookTicket('Cruise');
flight("Chennai","Bangalore");
train("Chennai","Bangalore");*/
function bookTicket(mode)
{
    var discount  = mode == 'flight'  ? 10 :
                    mode == 'train'   ? 20 :
                    mode == 'cruise'  ? 30 : 0;
                    var price = Math.floor((Math.random()*1000) + 1);
                    console.log("This is the Outer");
    return {
        printTicket: function (source, destination)
        {
            return function () 
            {
                console.log("This is 2nd Closure ");
                console.log("Price " + price);
                console.log("Discount: " + discount);
                console.log("Source: " + source);    
            }
        },
        printDiscount: function (source, destination)
        {
            console.log("Discount "+ price*(discount/100));
        }
    }
}
var flight = bookTicket('flight');
var secondClosure = flight.printTicket("Chennai","Bangalore");
secondClosure();
//flight.printDiscount("Delhi","Bangalore");
