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
        const options = getOptions(req)
        const searchTerms = getSearchTerms(req)

        this.dataDriver.getLogs(searchTerms,options, (err, result) => {
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
    let query = req.query
    
    delete query.skip
    delete query.take
    delete query.orderBy
    
    // TODO handle timestamp {from and to}
    return query
}

getPayload = function(req) {
    return req.body
}

getOptions = function (req) {
    const query = req.query
   
    let options = {}
    options.limit = parseInt(query.take)
    options.skip = parseInt(query.skip) 
    options.sort = (query.orderBy).split(',')
    return options
}