const express = require('express')
const router = express.Router()


router.get('/', require('./home'))

module.exports = router