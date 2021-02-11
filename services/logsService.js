const validator = require('./logValidator')

/**
 * service layer reading and writing logs 
 * @param {*} dataDriver database driver 
 */
let LogService = class {
    constructor(dataDriver){
        this.dataDriver = dataDriver
    }

    /**
     * find logs 
     * @param {*} req raw request object from controller (query used to search logs)
     * @param {*} callback 
     */
    getLogs = function(req, callback) {
        this.dataDriver.getLogs(getSearchTerms(req), (err, result) => {
            callback(err, result)
        })
    }

    /**
     * writes logs
     * @param {*} req raw request object from controller (body used to write log entry)
     * @param {*} callback 
     */
    postLogs = function(req, callback) {
        const payload = getPayload(req)
        validator.validate(payload, (err, logEntry) => {
            if(!err) {
                this.dataDriver.writeLogs(logEntry, (er, result) => {
                    callback(er, result)
                })
            }
            else {
                callback(err,null)
            }
        })
    }
}
module.exports = LogService


// Private methods 


getSearchTerms = function(req) {
    // TODO handle take, skip and sort 
    // TODO handle timestamp {from and to}
    return req.query
}

 getPayload = function(req) {
    return req.body
}