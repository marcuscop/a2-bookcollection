var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;


// NOTE: your dataset can be as simple as the following, you need only implement functions for addition, deletion, and modification that are triggered by outside (i.e. client) actions, and made available to the front-end
var books = [
  {'name': 'Dave', 'email': 'hi2@gmail.com'},
  {'name': 'Ben', 'email': 'brv@gmail.com'},
  {'name': 'Melissa', 'email': 'league@gmail.com'}
]

var server = http.createServer (function (req, res) {

  if (req.method == 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
            console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);

            // add name and email to the data set
            var i;
            var newbook;
            var all = body.split("=");
            for (i = 1; i < all.length; i++) {
                var indiv = all[i].split("&");
                console.log(indiv[0]);
            }

        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');

  } else {

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
      case '/js/scripts.js':
        sendFile(res, 'public/js/scripts.js', 'text/javascript')
        break
      case '/css/horoscope_bg.jpg':
        sendFile(res, 'public/css/horoscope_bg.jpg')
        break
      case '/css/caveat-regular.ttf':
        sendFile(res, 'public/css/caveat-regular.ttf')
        break
      case '/submit.html':
        sendFile(res, 'public/submit.html')
        break
      default:
        res.end('404 not found')
    }

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
