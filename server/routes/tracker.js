const router = require('express').Router()
const trackerController = require('../controllers/tracker')
const authMiddleware = require('../middlewares/auth')

router.get('/', authMiddleware, trackerController.getDate)

module.exports = router