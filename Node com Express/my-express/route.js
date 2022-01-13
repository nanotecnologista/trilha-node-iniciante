var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.json({
        message: 'Hello world'
    })
})

router.get('/a*r', function(req, res){ // a?r são parametros, o parametro a não pode ser acessado só
    /* res.send('router a?r') // o parametros r ou ar podem ser requisitados juntos */
    /* res.send('router a+r') // o parametros r ou ar podem ser requisitados juntos, com a repedito ou não antes */
    res.send('router a*r') // o parametros r ou ar podem ser requisitados juntos com qualquer coisa no meio
})

module.exports = router