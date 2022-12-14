const router = require('express').Router()
const UserController = require('../controllers/user-controller')
const errorHandler = require('../helpers/errorhandler')
const middleware = require('../helpers/middleware')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use(middleware)
router.use(errorHandler)

module.exports = router