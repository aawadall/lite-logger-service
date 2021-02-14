const express = require('express')
const router = express.Router();
const controllers = require('../controllers/adminController')

router.get('/stats', controllers.getStats)

router.put('/archive', controllers.putArchive)

module.exports = router