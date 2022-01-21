const BasicStrategy = require('passport-http').BasicStrategy

module.exports= new BasicStrategy(
    function(username, password, cb /* cb == CallBack */){
        if(username === 'admin' && password == 'admin'){
            cb(null,true)
        }else{
            return cb(null,false)
        }
    }
)