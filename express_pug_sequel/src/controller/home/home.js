const path = require('path');
const Sequelize = require('sequelize');

const sequelize = require('./../../model/index');
const Event = require(path.join(__dirname, './../../model/event'))(sequelize, Sequelize.DataTypes);

module.exports = (req,res) => {
    return res.render('home/index',{
        title: 'Home Page',
        msg:'Welcome to Events app'
    })
}