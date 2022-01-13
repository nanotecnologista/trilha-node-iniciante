var ws = require('websocket').server
var http = require('http')

var socket = new ws ({
    httpServer: http.createServer().listen(3000)
})
socket.on('request', function(req){
    var conn = req.accept(null, req.origin)
    console.log('Origin ->', req.origin)

    conn.on('message', function(message){
        conn.sendUTF('Hello from server')
    } )

    conn.on('close', function(message){
        conn.sendUTF('Conection is closed')
    } )
})