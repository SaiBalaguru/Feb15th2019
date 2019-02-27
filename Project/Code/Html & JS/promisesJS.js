let promise  = new Promise((resolve,reject)=>{
   // console.log("I am second");
    if(true)
    {
        
        resolve("I am the resolved Data 1");
      //reject("I am the rejected Data 1");
    }
    else{
        reject("I am the rejected Data");
    }
});
let promise1  = new Promise((resolve,reject)=>{
    //console.log("I am second");
    if(true)
    {
        
        resolve("I am the resolved Data 2");
       //reject("I am the rejected Data2");
    }
    else{
        reject("I am the rejected Data");
    }
});
// promise.then(data=>{
//     console.log(data+"I am not called");
// }).catch(err=>{
//     console.log(err+" This is an error");
// }) 
Promise.all([promise,promise1]).then((data)=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})

console.log("I am the first");