(function () {
    'use strict';
    var students,columnNames=[];
    students = [{
            Author: "Agatha Christie",
            Bookname: "Murder on the Orient Express",
            Date: "25th January 2018"
        },
        {
            Author:"Paulo Coelho",
            Bookname: "Alchemist",
            Date: " 13th January 2019",
           
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
                var dataCol1    = createElement('td');
                dataColumn.innerHTML = students[x][columnNames[columns]];
                dataCol1.innerHTML = students[x][columnNames[columns]];
                dataRow.appendChild(dataColumn);
                dataRow.appendChild(dataCol1);
            }
        var tdButton = createElement('td');
        var tdButton1 = createElement('td');
        var button = createElement('button');
        var button1 = createElement('button');
        button.className = 'btn btn-primary delete1';
        button1.className = 'btn btn-primary add1';
        button.innerHTML = "Delete Row";
        button1.innerHTML = "Edit Row";
        tdButton.appendChild(button);
        tdButton1.appendChild(button1);
        dataColumn.appendChild(tdButton);
        dataCol1.appendChild(tdButton1);
        dataRow.appendChild(tdButton);
        dataRow.appendChild(tdButton1); 
        console.log(dataRow);
        return dataRow;
    }
    function createTable(){
        var tbl = document.getElementById('Books');
        tbl.appendChild(createHeaderRow());
        for(var x=0;x<students.length;x++){
          tbl.appendChild(createDataRow(x));
        };
        var buttons = document.getElementsByClassName("delete1");
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
    var addb  = document.getElementById("add");
    addb.addEventListener('click',function(){
        students.push({Author: "asd", Bookname: "sdf", Date: "sdg"});
   document.getElementById("Books").appendChild(createDataRow(students.length-1));
    })
    
})();
