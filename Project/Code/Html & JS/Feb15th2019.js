/*var arr = [{
    name:'asd',
    age :'123'
},
{name:'sdf',
age :'345'
},
{name:'fgh',
age :'788'
},
{name:'234',
age :'ghj'
},
{name:'sdfg',
age :'7658'
}];
for (var i in arr)
{
    console.log(arr[i]);
}
for(var i in arr[0])
{
    console.log(i);
}
var students = [{
    name: "Sai",
    age: 21
},
{
    name: "Kiran",
    age: 24
}];*/
(function(){
    'use strict';
    var students, numberOfColumns = [];
    students = [{
        name:'asd',
    age :'123'
},
{name:'sdf',
age :'345'}]
    function createElemnet(elementType)
    {
        return document.createElement(elementType);
    }

function createHeaderRow(){
    var headerRow = createElemnet('tr');
    for(var i in students[0]){
        var column = createElemnet('td');
        column.innerHTML = i;
        headerRow.appendChild(column);
        columnNaames.push(i);
    }
    console.log(headerRow);
    return headerRow;
}

function createDataRow(x) {
    var dataRow= createElemnet('tr');
    for(var columns = 0,columns<columnNaames.length; columns++){
        var dataColumn = createElemnet('td');
        
    }

console.log(dataRow);
return dataRow;
}












})();