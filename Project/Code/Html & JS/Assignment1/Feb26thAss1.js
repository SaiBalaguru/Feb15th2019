document.getElementById("value5").disabled = true;
var a = document.getElementById("value1");
a.addEventListener('keypress',function(e){
    function validateInput(e,regex)
    {
        if(regex.test(e.key))
        {

        }
        else{
            e.preventDefault();
            a.style.borderColor = "red";
            
        }    
    }
    validateInput(e,/^[A-Za-z]+$/);
})
var x = document.getElementById("age1");
x.addEventListener('keypress',function(f){
    if(x.value>10)
    {
        x.style.borderColor = "Red";
    }
    else{
        x.style.borderColor = "Green";
    }

})
var b = document.getElementById("value2");
b.addEventListener('keypress',function(c){
    a.style.borderColor = "green";
    function validateInput(e,regex)
    {
        
        if(regex.test(c.key))
        {

        }
        else{
            c.preventDefault();
            b.style.borderColor = "red";
            
        }    
    }
    validateInput(b,/^[A-Za-z]+$/);
})
var d = document.getElementById("agreements");
d.addEventListener('click',function(){
    b.style.borderColor = "Green";
    document.getElementById("value5").disabled = false;
})
function clicker(){
var temp = document.getElementsByName("Gender");
var gen;
for(var i = 0; i<temp.length;i++)
{
    if(temp[i].checked)
    {
        gen = temp[i].value;
    }
}
var data = {
"Username" : document.getElementById("value1").value,
"Password" : document.getElementById("value2").value,
"Gender"   : gen,
"Country"  : document.getElementById("country").value,
"Age": document.getElementById("age1").value
}
console.log(data);
}

