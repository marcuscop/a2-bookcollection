// Add some Javascript code here, to run on the front end.
function addToTable() {
    var book = [];

    var x = document.getElementById("form1");
    var text = "";
    var i;
    var rowlen = document.getElementById("myTable").rows.length;
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell;
    for (i = 0; i < x.length ;i++) {
        book[i] = x.elements[i].value;
        text = x.elements[i].value;
        cell = row.insertCell();
        cell.innerHTML = text;
    }
    addDBEntry(book);
}

function addDBEntry(book){
  console.log("hello")
  xhr = new XMLHttpRequest()
  xhr.onreadystatechange = handle_res
  xhr.open("POST", "/books", true)
  xhr.send('hellllo')

  function handle_res(){
    if(this.readyState != 4) return;
    if(this.status != 200){
      //
    }

    /*var books = JSON.parse(this.responseText)
    books.push({ 'id' : book[4], 'title': book[0], 'author' : book[1], 'genre': book[2], 'date': book[3]});
    books.forEach(function(d){
      document.getElementById('booksgohere').innerHTML = document.getElementById('booksgohere').innerHTML + d.title  // createElement('div').text(d.title)
      //var newContent = documentTextNode("Hi there");
      //document.getElementbyId(id);
    })*/

  }

}


function modifyDBEntry(){
  console.log("hello")
  xhr = new XMLHttpRequest()
  xhr.onreadystatechange = handle_res
  xhr.open("GET", "/books")
  xhr.send()

  function handle_res(){
    if(this.readyState != 4) return;
    if(this.status != 200){
      //
    }

    var books = JSON.parse(this.responseText)
    books.forEach(function(d){
      document.getElementById('booksgohere').innerHTML = document.getElementById('booksgohere').innerHTML + d.title  // createElement('div').text(d.title)
      //var newContent = documentTextNode("Hi there");
      //document.getElementbyId(id);
    })
  }

}
