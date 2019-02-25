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
(function () {
    'use strict';
    var students,columnNames=[];
    students = [{
            name: "Kiran",
            age: 30,
            gender:"M"
        },
        {
            gender:"M",
            name: "John",
            age: 20,
           
        }
    ];
    

    function createElement(elementType) {
        return document.createElement(elementType);
    }

    function createHeaderRow() {
        var headerRow = createElement('tr');
        for (var i in students[0]) {
            var column = createElement('td');
            column.innerHTML = i;
            headerRow.appendChild(column);
            columnNames.push(i);
        }
        console.log(headerRow);
        return headerRow;
    }

    function createDataRow(x) {
            var dataRow = createElement('tr');
            for(var columns=0;columns<columnNames.length;columns++){
                var dataColumn = createElement('td');
                dataColumn.innerHTML = students[x][columnNames[columns]];
                dataRow.appendChild(dataColumn);
            }
        var tdButton = createElement('td');
        var button = createElement('button');
        button.className = 'btn btn-primary';
        button.innerHTML = "Delete Row";
        tdButton.appendChild(button);
        dataColumn.appendChild(tdButton);
        dataRow.appendChild(tdButton); 
        console.log(dataRow);
        return dataRow;
    }
    function createTable(){
        var tbl = document.getElementById('tblEmployees');
        tbl.appendChild(createHeaderRow());
        for(var x=0;x<students.length;x++){
          tbl.appendChild(createDataRow(x));
        };
        var buttons = document.getElementsByClassName('btn');
        for(var r = 0;r<buttons.length;r++)
        {
            buttons[r].addEventListener('click',function(){
               // console.log(x['rowNumber']);
                //console.log(this['rowNumber']);
                this.parentNode.parentNode.remove();
            })
        }
    }
    createTable();
})();
