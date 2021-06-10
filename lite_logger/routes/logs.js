const express = require('express')
const router = express.Router();
const controllers = require('../controllers/logsController')

router.get('/', controllers.getLogs)

router.post('/', controllers.postLogs)

module.exports = router