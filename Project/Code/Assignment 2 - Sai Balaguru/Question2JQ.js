(function(){
'use strict';
function addBook(){
    let book = {
        name:$('#txtName').val(),
        author:$('#txtAuthor').val(),
        date:$('txtData').val(),
    }
    bookList.push(book);

}
function deleteBook(){

}
function editBook(){

}
$('#add').bind('click',addBook)
})();