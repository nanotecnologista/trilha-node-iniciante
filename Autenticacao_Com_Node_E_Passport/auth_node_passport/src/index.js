module.exports = (app, passport) =>{
    app.use('/', require('./controller/main/index'))
    app.use('/users', require('./controller/users/index')(passport))
}