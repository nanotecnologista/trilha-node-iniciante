/* console.log ('Hello World')
var a = 2 , b = '2'
var c = a+b;

console.log('c ->',c) */

var http = require('http')

function handle(request, response){
    request.writeHead(200, {
        'Content-Type': 'text/html'
    })

    response.write ('<!DOCTYPE "html">')
    response.write ('<html>')
    response.write ('<head><title> http Module</title></head>')
    response.write ('<body>')
    response.write ('<h1>Olá mundo</h1>')
    response.write ('</body>')
    response.write ('</html>')
    response.end ()

}

var server = http.createServer(handle)

server.listen(3000, function () {
    console.log ('Server is listening at port 3000')
})