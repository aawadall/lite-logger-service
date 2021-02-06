const DataDriver = require('../data/mongoDriver')
const LogsService = require('../services/logsService')
const logsDbName = 'logs'
const mongoUrl = `mongodb://172.22.0.2:27017/${logsDbName}`
// TODO: find out how to lookup mongodb service ip address and port 
const logsService = new LogsService(new DataDriver(mongoUrl, "root", "root"))

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