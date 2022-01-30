const { Router } = require('express')
const router = Router()

router.get('/', require('./main-get'))

module.exports = router