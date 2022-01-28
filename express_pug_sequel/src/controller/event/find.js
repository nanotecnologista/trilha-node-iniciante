const sequelize = require('./../../model/index')
const Event = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);

module.exports = (req, res) => {
	Event
		.findAll()
		.then((events) => {
			return res.render('event/index', {
				title: 'List all events',
				msg: 'All events',
				events: events
			})		
		})
}