const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ack:get')
})

router.post('/', (req, res) => {
    res.send('ack:post')
})

module.exports = router