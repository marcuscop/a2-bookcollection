function deleteFromTable() {
    var type = "delete";
    var book = [];
    var x = document.getElementById("form2");
    var text = "";
    var i;
    var valid =0;
    var table = document.getElementById("myTable");
    for (i = 1; i < table.rows.length; i++) {
        if(x.elements[0].value == table.rows.item(i).cells[0].innerHTML){
          valid = 1;
          book.push(x.elements[0].value);
          table.deleteRow(i);
          sendDBEntry(book, type);
        }
    }
    if (valid == 0) {
    	document.getElementById("invalid").innerHTML = "There is no book with that name in your collection!";
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

function handleModify() {
    var x = document.getElementById("form3");
    var text = "";
    var i;
    var valid = 0;
    var table = document.getElementById("myTable");
    for (i = 1; i < table.rows.length; i++) {
        if(x.elements[0].value == table.rows.item(i).cells[0].innerHTML){ //If book with that name
          valid = 1;
          document.getElementById("you_modify").innerHTML = "Please type in what you want to modify";
          document.getElementById("modify").style.visibility = "visible";
        }
    }
    if (valid == 0) {
    	document.getElementById("invalidmod").innerHTML = "There is no book with that name in your collection!";
    }
}

function modifyTable() {
    var type = "modify";
    var book = [];
    var x = document.getElementById("form3");
    //console.log(x.elements[0].value);
    var y = document.getElementById("form4");
    var text = "";
    var i, j;
    var valid = 0;
    var table = document.getElementById("myTable");

    // modify front end table
    for (i = 1; i < table.rows.length; i++) {
      if(x.elements[0].value == table.rows.item(i).cells[0].innerHTML){ // finds row
        for(j=0; j<3; j++){
          if(y.elements[j].value != ""){ // finds column
            console.log(y.elements[j].value);
            table.rows.item(i).cells[j+1].innerHTML = y.elements[j].value;
          } // if
        } // for
      } // if
    } // for

    // make a new book with the modifications
    book.push(x.elements[0].value);
    for(i=0; i<3; i++){
      if(y.elements[i].value != ""){
        book.push(y.elements[i].value);
      } else {
        book.push("");
      }
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
