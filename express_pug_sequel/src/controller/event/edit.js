const sequelize = require('./../../model/index')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res)=> {
    Event
        .findById(res.params.id)
        .then((event) => {
            return res.render('event/edit', {
                title: 'Edit - ' + event.name,
                msg:"Editing - " + event.name,
                event: event
            })
        })
}