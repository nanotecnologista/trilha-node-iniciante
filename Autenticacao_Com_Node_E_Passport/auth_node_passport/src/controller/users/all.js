const User = require('./../../model/user')

module.exports = (req, res) =>{
    User.find({}).then((users)=>{
        return res.render('users/index', {
            users
        })
    }).catch((erro)=>{
        console.log(error)
    })
}