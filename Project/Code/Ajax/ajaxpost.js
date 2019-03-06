$(document).ready(function(){
    let payload = {
        country: "",
        mobile: "",
        email: ""
    };
    $('#butn').bind('click',function(){
        payload.country = $('#ddlcountry').val();
        payload.mobile = $('#Mno').val();
        payload.email = $('#Email').val();
        $.ajax({
            url: 'http://ec2-52-15-82-159.us-east-2.compute.amazonaws.com/gigx/api/signup',
            type: 'POST',
            data: payload
        }).then(result=>{
            console.log(result);
        }).catch(err=>{
            console.log(err);
        })
    })
})