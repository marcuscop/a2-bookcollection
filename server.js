var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;


// NOTE: your dataset can be as simple as the following, you need only implement functions for addition, deletion, and modification that are triggered by outside (i.e. client) actions, and made available to the front-end
var books = [
  {'id': '1', 'title': 'Harry Potter','author': 'J.K.Rowling', 'genre': 'fiction', 'date': '03/24/02'},
  {'id': '2', 'title': 'Lord of the Rings','author': 'J.R.R Tolkien', 'genre': 'fiction', 'date': '09/12/98'}
]

var server = http.createServer (function (req, res) {

  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'public/index.html')
      //printBooks();
      break
    case '/index.html':
      sendFile(res, 'public/index.html')
      //printBooks();
      break
    case '/css/style.css':
      sendFile(res, 'public/css/style.css', 'text/css')
      break
    case '/js/scripts.js':
      sendFile(res, 'public/js/scripts.js', 'text/javascript')
      //printBooks();
      break
    case '/css/caveat-regular.ttf':
      sendFile(res, 'public/css/caveat-regular.ttf')
      break
    case '/books':
      console.log(req.method);
      console.log(req.body);
      res.end(JSON.stringify(books))
      //books.push({ 'id' : req.body[4], 'title': req.body[0], 'author' : req.body[1], 'genre': req.body[2], 'date': req.body[3]});
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

function printBooks(){
  var i;
  for(i=0; i<books.length; i++){
    console.log(books[i].id);
    console.log(books[i].title);
    console.log(books[i].author);
    console.log(books[i].genre);
    console.log(books[i].date);
  }
}
