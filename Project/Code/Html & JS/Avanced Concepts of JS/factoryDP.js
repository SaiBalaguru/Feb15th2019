// function factory(){
//     this.createVehicle = function (type){
//         var vehicle;
//     }
// }
// function car(){
//     this.noOfDoors = 4;
//     this.noOfTyres = 4;
//     this.engineCC = 2000;
// }
// function bike(){
//     this.noOfTyres = 2;
//     this.engineCC = 250;
// }
// var a = new factory();
// a.createVehicle(type);
var materials = [

    'Hydrogen',
    
    'Helium',
    
    'Lithium',
    
    'Beryllium'
    ];
    
    var materialsLength1 = materials.map(function(material) { 
    
    return material.length;
    });
    console.log(materialsLength1);
    var legsCountSymbol = Symbol();
console.log(typeof legsCountSymbol);
class AnimalES6 {

    constructor(name) {
    
    this.name = name;
    
    }
    
    
    doSomething() {
    
    
    console.log("I am a"+ "" + this.name);
    
    }
    }
    
    var lionES6 = new AnimalES6("Lion");
    lionES6.doSomething();
    