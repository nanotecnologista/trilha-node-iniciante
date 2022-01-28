const sequelize = require('./../../model/index')
const Event = require('./../../model/event')
module.exports = (req, res) => {
  return res.render('event/new', {
    title: 'New Event',
    msg: 'Create a new event',
    event: Event
  })  
}