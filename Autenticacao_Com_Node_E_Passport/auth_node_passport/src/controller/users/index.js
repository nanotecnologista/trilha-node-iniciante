const express = require('express')
const router = express.Router()

router.get('/', require('./all'))
router.post('/', require('./create'))
router.get('/new', require('./new'))
router.delete('/:id', require('./remove'))


module.exports = router
