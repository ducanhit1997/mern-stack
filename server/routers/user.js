const router = require('express').Router()

const controler = require('../controllers/user')

router.post('/register', controler.register)

module.exports = router