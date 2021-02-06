let LogService = class {
    constructor(dataDriver){
        console.debug(`Init: LogService `)
        dataDriver = dataDriver
    }

     getLogs = function(req, callback) {
        // TODO
        console.debug(req)
        dataDriver.getLogs(getSearchTerms(req, callback))
    }

     postLogs = function(req, callback) {
        // TODO
        console.debug(req)
        dataDriver.writeLogs(getPayload(req, callback))
    }

     getSearchTerms = function(req) {
        // TODO 
        let searchTerms = {}
        return searchTerms
    }

     getPayload = function(req) {
        // TODO
        let payload = {}
        return payload
    }
}
module.exports = LogService