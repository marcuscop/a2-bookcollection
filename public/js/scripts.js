// Add some Javascript code here, to run on the front end.
function addToTable() {
    var x = document.getElementById("form1");
    var text = "";
    var i;
    var rowlen = document.getElementById("myTable").rows.length;
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell;
    for (i = 0; i < x.length ;i++) {
        //console.log(x.elements[i].value);
        //console.log(x.length);
        text = x.elements[i].value;
        //console.log(text);
        cell = row.insertCell();
        cell.innerHTML = text;
        //document.getElementById("myTable").rows.item(rowlen).innerHTML = text;
    }
    //document.getElementById("myTable").rows.item(rowlen).innerHTML = text;

}

function addToDB(){
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

    var movies = JSON.parse(this.responseText)
    movies.forEach(function(d){
      document.getElementById('booksgohere').innerHTML = document.getElementById('booksgohere').innerHTML + d.title  // createElement('div').text(d.title)
      //var newContent = documentTextNode("Hi there");
      //document.getElementbyId(id);
    })
  }

}
