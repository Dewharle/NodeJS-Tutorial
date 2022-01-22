const express = require('express')
const router = express.Router()

const {profileController,contactController, homeController, getMessages} = require('../controllers/homeController')

router.get('/', profileController)
router.post('/contact', contactController )
router.get('/homepage', homeController)
router.get('/messages', getMessages)
module.exports = router