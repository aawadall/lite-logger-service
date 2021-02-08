const express = require('express')
const router = express.Router();
const controllers = require('../controllers/healthController')

router.get('/', controllers.getHealth)

module.exports = router