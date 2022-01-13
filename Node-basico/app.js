/* console.log ('Hello World')
var a = 2 , b = '2'
var c = a+b;

console.log('c ->',c) */

var http = require('http')
var handle =require('./handle')
var s = require ('./name')

/* function handle(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'})

    response.write ('<!DOCTYPE "html">')
    response.write ('<html>')
    response.write ('<head><title> http Module</title></head>')
    response.write ('<body>')
    response.write ('<h1>Olá mundo</h1>')
    response.write ('</body>')
    response.write ('</html>')
    response.end ()

} */
console.log(s.name())
var server = http.createServer(handle.fn)

server.listen(3000, function () {
    console.log ('Server is listening at port 3000')
})
