var express = require('express')
// var http = require('http')
var app =  express()
var routes = require('./route')

app.get('/', function(req, res){
    res.send('Hello world from express by Jubas')
})


app.get('/world', function(req, res){
    res.send('World')
} )

app.use('/hello', routes)

// http.createServer(app).listen(3000, function(){
//     console.log('Express Started')
// })

app.listen(3000, function(){
    console.log('Express Started')
})