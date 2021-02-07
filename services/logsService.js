const validator = require('./logValidator')

let LogService = class {
    constructor(dataDriver){
        console.debug(`Init: LogService `)
        this.dataDriver = dataDriver
    }

     getLogs = function(req, callback) {
        // TODO
        
        this.dataDriver.getLogs(getSearchTerms(req), callback)
    }

     postLogs = function(req, callback) {
        // TODO
        const payload = getPayload(req)
        validator.validate(payload, (err, logEntry) => {
            if(!err) {
                this.dataDriver.writeLogs(logEntry, callback)
            }
        })
        
    }

     
}
module.exports = LogService


getSearchTerms = function(req) {
    // TODO 
    
    let searchTerms = req.query
    return searchTerms
}

 getPayload = function(req) {
    // TODO
    let payload = req.body
    console.debug(`payload: ${payload}`);
    return payload
}