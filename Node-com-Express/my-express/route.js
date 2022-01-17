var express = require('express');
var router = express.Router();

router.use(function (req, res, next){
    req.name = 'SON'
    console.log("I AM A ROUTER CUSTOM MIDDLEWARE")
    next() //CallBack
})
router.get('/', function(req, res){
    res.json({
        message: 'Hello world'
    })
})

router.get('/a?r', function(req, res){ // a?r são parametros, o parametro a não pode ser acessado só
    res.send('router a?r') // o parametros r ou ar podem ser requisitados juntos
    /* res.send('router a+r') // o parametros r ou ar podem ser requisitados juntos, com a repedito ou não antes */
    /* res.send('router a*r') // o parametros r ou ar podem ser requisitados juntos com qualquer coisa no meio */
})
router.get('/params/:name', function(req, res){
    res.json({
        params: req.params,
        host: req.hostname,
        header: req.headers
    })
})

router.post('/body', function(req, res){
    res.json(req.body.name)
})


router.get('/res', function(req, res){
    res.render('index',{

    } )
    // // res.send('test')
    // res.status(201).json({
    //     name: "Leonan",
    //     lastname : "Juju"
    // })
})

module.exports = router