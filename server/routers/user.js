const router = require('express').Router()

const controler = require('../controllers/user')

router.post('/signup', controler.signup)
router.post('/signin', controler.signin)
router.post('/refreshToken', controler.refreshToken)

module.exports = router