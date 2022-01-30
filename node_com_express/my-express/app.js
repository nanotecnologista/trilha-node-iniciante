var express = require('express')
var app =  express()
// var http = require('http')
var routes = require('./route')
var bodyParser = require('body-parser')
var path = require('path')

app.set('views', './views_dir' )
app.set('view engine', 'pug' )

app.use(function(req, res, next){
    console.log('I AM A CUSTOM MIDDLEWARE') // Middleware ≠ Rotas. O Middleware fornece callback
    next()
})

app.get('/', function(req, res){
    res.render('index', {
        message: 'Hello World from Express by SON'
    } )
    //res.send('Hello world from express by Jubas' + req.name)
})

app.get('/world', function(req, res){
    res.send('World')
} )

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/hello', routes)
app.use('/public', express.static(path.join(__dirname, 'public')))

// http.createServer(app).listen(3000, function(){
    //     console.log('Express Started')
    // })
    
app.listen(3000, function(){
    console.log('Express Started')
})

    app.use (function(err, req, res, next){
        res.status(500).json({
            message: 'Something wrong happens'
        })
    })