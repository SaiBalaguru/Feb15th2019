var parent = document.querySelector('#parent');
parent.addEventListener('click',function(e){
    e.stopPropagation();
    console.log("Parent Clicked");
},true);
var child = document.querySelector('#child');
child.addEventListener('click',function(a){
    console.log("Child Clicked");
 //  a.stopPropagation();
});
var btn2 = document.querySelector('#btn1');
btn2.addEventListener('click',function(e){
    e.preventDefault();
    console.log("See below");
    console.log(this);
    alert("Right Click is disabled");
})
