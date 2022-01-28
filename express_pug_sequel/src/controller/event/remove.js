const sequelize = require('./../../model/index')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res)=> {
    Event
        .destroy({where:{id: req.params.id}})
        .then(() => res.redirect('/events'))
}