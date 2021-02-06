const DataDriver = require('../data/mongoDriver')
const LogsService = require('../services/logsService')

const logsService = new LogsService(new DataDriver('mongodb://localhost:27017/logs'))

function getLogs(req, res) {
    logsService.getLogs(req, (err, result) => {
        if (err) {
            res.status(200).json(result)
        } 
        else {
            res.status(err.status).json(err.message)
        }
    })
    
}

function postLogs(req, res) {
    logsService.postLogs(req, (err, result) => {
        if (err) {
            res.status(201).json(result)
        } 
        else {
            res.status(err.status).json(err.message)
        }
    })
}

module.exports = {
    getLogs: getLogs,
    postLogs: postLogs
}