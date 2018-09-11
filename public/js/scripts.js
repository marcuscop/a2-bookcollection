var BOOK_ID = 2;

function search() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function searchTable() {
  var x = document.getElementById("form5");
  var text = "";
  var i;
  var valid = 0;
  var table = document.getElementById("myTable");
  for (i = 1; i < table.rows.length; i++) {
      if(x.elements[0].value == table.rows.item(i).cells[0].innerHTML){ //If book with that name
        valid = 1;
        document.getElementById("searchResults").innerHTML = (table.rows.item(i).cells[0].innerHTML
                                                            + "<br><br>Author: " + table.rows.item(i).cells[1].innerHTML
                                                            + "<br>Genre: " + table.rows.item(i).cells[2].innerHTML
                                                            + "<br>Publication Date: " + table.rows.item(i).cells[3].innerHTML);
      }
  }
  if (valid == 0) {
    document.getElementById("invalidSearch").innerHTML = "There is no book with that name in your collection!";
  }

}

function deleteFromTable() {
    var type = "delete";
    var book = [];
    var x = document.getElementById("form2");
    var text = "";
    var i;
    var valid = 0;
    var table = document.getElementById("myTable");
    for (i = 1; i < table.rows.length; i++) {
        if(x.elements[0].value == table.rows.item(i).cells[0].innerHTML){
          valid = 1;
          book.push(x.elements[0].value);
          table.deleteRow(i);
          alert('You deleted a book in your collection!');
          sendDBEntry(book, type);
        }
    }
    if (valid == 0) {
    	document.getElementById("invalid").innerHTML = "There is no book with that name in your collection!";
    }
    if (valid == 1) {
    	document.getElementById("invalid").innerHTML = "";
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

    //Derived field
    book[i] = (new Date()).getFullYear() - parseInt(x.elements[i-1].value.substring(0,4));
    text = (new Date()).getFullYear() - parseInt(x.elements[i-1].value.substring(0,4));
    cell = row.insertCell();
    cell.innerHTML = text;

    //Delete Button
    cell = row.insertCell();
    cell.id = BOOK_ID + 1;
    var btn = document.createElement('button');
    btn.id = BOOK_ID + 1;
    //console.log(btn.id);
    btn.innerHTML = "Delete";
    btn.onclick = deleteButton.bind(btn.id);
    cell.appendChild(btn);

    BOOK_ID = BOOK_ID + 1;

    alert('Congratulations! You added a book to your collection!');
    sendDBEntry(book, type);
}

function deleteButton(clicked_id) {
    //check if clicked id is a string
    var id;
    if(typeof clicked_id === 'string') {
      id = clicked_id;
    } else {
      id = clicked_id.target.id;
    }

    var type = "delete";
    var book = [];
    var text = "";
    var i;
    var valid = 0;
    var table = document.getElementById("myTable");
    for (i = 1; i < table.rows.length; i++) {
        if(table.rows.item(i).cells[5].id == id){ // find button pressed
          valid = 1;
          book.push(table.rows.item(i).cells[0].innerHTML);
          table.deleteRow(i);
          sendDBEntry(book, type);
        }
    }
    if (valid == 0) {
    	document.getElementById("invalid").innerHTML = "There is no book with that name in your collection!";
    }

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
            //console.log(y.elements[j].value);
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
    document.getElementById("invalidmod").innerHTML = "";
    var soMany = 10;
    alert('You modified a book in your collection!');
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
