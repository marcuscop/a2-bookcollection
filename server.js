var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  //, Pg   = require('pg');
  , port =
 8080;

/*const pg = new Pg({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
app.get('/db', async (req, res) => {
  try {
    const client = await pg.connect()
    const result = await client.query('SELECT * FROM test_table');
    res.render('pages/db', result);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});*/
// NOTE: your dataset can be as simple as the following, you need only implement functions for addition, deletion, and modification that are triggered by outside (i.e. client) actions, and made available to the front-end
var id_counter = 2; // each book has a unique id

var books = [
  {'id': '1', 'title': 'Harry Potter','author': 'J.K.Rowling', 'genre': 'fiction', 'date': '2002-2-20','age':'16'},
  {'id': '2', 'title': 'Lord of the Rings','author': 'J.R.R Tolkien', 'genre': 'fiction', 'date': '1998-9-12','age':'20'}
]

var server = http.createServer (function (req, res) {

  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'public/index.html')
      break
    case '/index.html':
      sendFile(res, 'public/index.html')
      break
    case '/css/style.css':
      sendFile(res, 'public/css/style.css', 'text/css')
      break
    case '/css/background.jpg':
      sendFile(res, 'public/css/background.jpg')
      break
    case '/js/scripts.js':
      sendFile(res, 'public/js/scripts.js', 'text/javascript')
      break
    case '/css/caveat-regular.ttf':
      sendFile(res, 'public/css/caveat-regular.ttf')
      break
    case '/books':
      if(req.method == 'POST'){
        handle_post(req);
      }
      else{
        res.end(JSON.stringify(books))
      }
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines
// NOTE: this is an ideal place to add your data functionality

function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}

function handle_post(req){
    var body = '';
    var arr = [];
    var type = '';
    req.on('data', function (data) {
        body += data;
        arr = body.split(',');
        type = arr.pop();

        if(type == "add"){
          handle_add(arr);
        } else if (type == "modify"){
          handle_modify(arr);
        } else if (type == "delete"){
          handle_delete(arr);
        } else {
          console.log("ERROR: Invalid operation on the database");
        }
    });
    req.on('end', function () {
        console.log('end');
    });
}

function handle_add(arr){
  books.push({ 'id' : (id_counter+1).toString(), 'title': arr[0], 'author' : arr[1], 'genre': arr[2], 'date': arr[3], 'age': arr[4]});
  // increment id_counter
  id_counter++;
  console.log(books);
}


function handle_modify(arr){
  var i;
  for(i = 0; i<books.length; i++){
    if(books[i].title == arr[0]){

      if(arr[1] != ""){
        books[i].author = arr[1];
      }
      if(arr[2] != ""){
        books[i].genre = arr[2];
      }
      if(arr[3] != ""){
        books[i].date = arr[3];
      }

    } // if
  } // for

  console.log(books);
}


function handle_delete(arr){
  //console.log(books);
  var i;
  var pos;
  for(i = 0; i<books.length; i++){
    if(books[i].title == arr[0]){
      pos = i;
      books.splice(pos, 1);
    }
  }

  console.log(books);
}
