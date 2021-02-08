const DataDriver = require('../data/mongoDriver')
const LogsService = require('../services/logsService')
const logsDbName = ''
const mongoHost = process.env.MONGO_HOST || 'localhost'
const mongoUrl = `mongodb://${mongoHost}:27017/${logsDbName}`

const logsService = new LogsService(new DataDriver(mongoUrl, true))

/**
 * get logs controller
 * @param {*} req request object
 * @param {*} res response object
 */
function getLogs(req, res) {
    logsService.getLogs(req, (err, result) => {
        if (!err) {
            res.status(200).json(result)
        } 
        else {
            res.status(err.status).json(err.message)
        }
    })
    
}

/**
 * post logs controller
 * @param {*} req request object
 * @param {*} res response object
 */
function postLogs(req, res) {
    logsService.postLogs(req, (err, result) => {
        if (!err) {
            res.status(201).json(result)
        } 
        else {
            res.status(err.status).json(err.message)
        }
    })
}

module.exports = {
    getLogs,
    postLogs
}