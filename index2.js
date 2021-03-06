var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('Please input a port')
  process.exit(1)
}

var server = http.createServer(function(request, response){   
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method


  console.log('HTTP PATH: ' + path)
  if(path == '/page1.html'){
    // we can add query request to database here for accessing data
    // and then return the data to front-end
    response.setHeader('Content-Type', 'text/css; charset=utf-8')  //utf-8：Chinese is allowed in utf-8
    response.write('Page 1')
    response.end()
  }else if(path == '/page2.html'){
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write('page 2 dada~')
    response.end()
  }else if(path == '/page3'){
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write('<!DOCTYPE>\n<html>'  + 
      '<head><link rel="stylesheet" href="/style.js">' +
      '</head><body>'  +
      '<h1>This is page 3</h1>' +
      '<script src="/script.html"></script>' +
      '</body></html>')
    response.end()
  }else{
    response.statusCode = 404
    response.end()
  }
})

server.listen(port)
console.log('Listening to ' + port + ' Please open http://localhost:' + port)