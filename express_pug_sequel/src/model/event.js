const { DataTypes } = require('sequelize')
const sequelize = require('./index')


const event = sequelize.define('Event',{
     name: DataTypes.STRING,
     description: DataTypes.TEXT
})

module.exports = event