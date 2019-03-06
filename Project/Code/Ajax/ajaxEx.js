$(document).ready(function(){
    'use strict';
    const countryAPI = "https://restcountries.eu/rest/v2/all";
    // $('#ddlcountry').bind('change',function(){
    //         alert(this.value);
    // })

    function fetchCountries(){
        $.ajax({
            url : countryAPI,
            type: 'GET',
            async: false,
            // success: function (result){
            //     console.log("I am first");
            // }    

        }).then(result=>{
            console.log(result);
            bindCountries(result);
        }).catch(err =>{
            console.log(err);
        });
    } 
    
    fetchCountries();
    //console.log( new window.XMLHttpRequest());
});
function bindCountries(data){
    data.forEach((x,i)=>{
      let option = $('<option/>').val(x.alpla2Code).text(x.name);
        //let option = $('<option/>').val(x.region).text(x.name);
        $('#ddlcountry').append(option);
    });
}
