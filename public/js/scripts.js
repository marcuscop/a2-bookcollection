// Add some Javascript code here, to run on the front end.
function addToTable() {
    var x = document.getElementById("form1");
    var text = "";
    var i;
    var rowlen = document.getElementById("myTable").rows.length;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
        document.getElementById("myTable").insertRow();
        document.getElementById("myTable").rows.item(rowlen+1).innerHTML = text;
    }
    document.getElementById("demo").innerHTML = text;
}
