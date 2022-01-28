const path = require('path')
const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const app=express();


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "src/view"))

require('./src/model/index')
require('./src/index')(app)

app.listen(9000, ()=>{
    console.log('Express has been ignite')
})
