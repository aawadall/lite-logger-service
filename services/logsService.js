let LogService = class {
    constructor(dataDriver){
        dataDriver = dataDriver
    }

     getLogs = function(req, callback) {
        // TODO
        dataDriver.getLogs(getSearchTerms(req, callback))
    }

     postLogs = function(req, callback) {
        // TODO
        dataDriver.writeLogs(getPayload(req, callback))
    }

     getSearchTerms = function(req) {
        // TODO 
        let searchTerms = new {}
        return searchTerms
    }

     getPayload = function(req) {
        // TODO
        let payload = new {}
        return payload
    }
}
module.exports = LogService