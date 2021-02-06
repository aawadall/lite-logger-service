let LogService = class {
    constructor(dataDriver){
        console.debug(`Init: LogService `)
        this.dataDriver = dataDriver
    }

     getLogs = function(req, callback) {
        // TODO
        //console.debug(req)
        this.dataDriver.getLogs(getSearchTerms(req), callback)
    }

     postLogs = function(req, callback) {
        // TODO
        //console.debug(req)
        this.dataDriver.writeLogs(getPayload(req), callback)
    }

     getSearchTerms = function(req) {
        // TODO 
        console.log("************************************************ ");
        console.log("*************** GET SEARCH TERMS *************** ");
        console.log(req);
        console.log("*************** GET SEARCH TERMS *************** ");
        console.log("************************************************ ");
        let searchTerms = req
        return searchTerms
    }

     getPayload = function(req) {
        // TODO
        let payload = {}
        return payload
    }
}
module.exports = LogService