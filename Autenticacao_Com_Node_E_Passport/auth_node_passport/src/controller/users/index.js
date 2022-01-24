const express = require('express')
const router = express.Router()

module.exports = (passport)=>{

    router.get('/', require('./all'))
    router.post('/', passport.authenticate('local-signup', {
        successRedirect:'/',
        failureRedirect:'/users'
    }))
    //router.post('/', require('./create'))
    router.get('/new', require('./new'))
    router.delete('/:id', require('./remove'))
    return router
}
