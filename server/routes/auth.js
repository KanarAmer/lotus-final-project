const router = require('express').Router()
const authController = require('../controllers/auth')
const authMiddleware = require('../middlewares/auth')

//server routes


//signup
router.post('/signup', authController.signup)

//signin
router.post('/signin', authController.signin)

//update user details
router.patch('/', authMiddleware, authController.updateDetails)

//get user information
router.get('/', authMiddleware, authController.getUserDetails)

module.exports = router;