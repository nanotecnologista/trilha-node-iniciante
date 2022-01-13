/* console.log ('Hello World')
var a = 2 , b = '2'
var c = a+b;

console.log('c ->',c) */

var http = require('http')
var handle =require('./handle')
var s = require ('./name')
require ('console-log-hello-world')

/* TRABALHANDO COM EVENTOS */
// var events = require('events')
// var emiter = new events.EventEmitter()

// emiter.on('say', say)

// function say() {
//     console.log('I am Say')
// }
// console.log(say)

// emiter.emit('say')

/* INICIANDO COM O NODE */
var querystring = require('querystring')

function handle(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'})

    var body = ''

    request.on('data', function (data){
        body += data.toString()
    })

    request.on('end', function (){
        var decode = querystring.parse(body)
        console.log(decode)
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

/* MODULARIZANDO */
// console.log(s.name())
var server = http.createServer(handle.fn)

server.listen(3000, function () {
    console.log ('Server is listening at port 3000')
})

