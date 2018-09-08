function deleteFromTable() {
    var type = "delete";
    var book = [];
    var x = document.getElementById("form2");
    var text = "";
    var i;
    var table = document.getElementById("myTable");
    for (i = 1; i < table.rows.length; i++) {
        if(x.elements[0].value == table.rows.item(i).cells[0].innerHTML){
          book.push(x.elements[0].value);
          table.deleteRow(i);
          sendDBEntry(book, type);
        }
    }

}

function addToTable() {
    var book = [];
    var type = "add";

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
    sendDBEntry(book, type);
}

function sendDBEntry(book, type){ // type is the type of operation (add, delete, or modify)
  console.log("sending request")
  book.push(type);
  xhr = new XMLHttpRequest()
  xhr.onreadystatechange = handle_res
  xhr.open("POST", "/books", true)
  xhr.send(book)

  function handle_res(){
    if(this.readyState != 4) return;
    if(this.status != 200){
      console.log("ERROR: State 4 of request");
    }
  }

}
