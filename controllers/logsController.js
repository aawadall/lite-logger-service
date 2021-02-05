function getLogs(req, res) {
    res.status(200).json({message: 'ack:get'})
}

function postLogs(req, res) {
    res.status(201).json({message:'ack:post'})
}

module.exports = {
    getLogs: getLogs,
    postLogs: postLogs
}