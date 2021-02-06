const data = require('../data/mongoDriver')

function getLogs(req, callback) {
    // TODO
    data.getLogs(getSearchTerms(req, callback))
}

function postLogs(req, callback) {
    // TODO
    data.writeLogs(getPayload(req, callback))
}

function getSearchTerms(req) {
    // TODO 
    let searchTerms = new {}
    return searchTerms
}

function getPayload(req) {
    // TODO
    let payload = new {}
    return payload
}
module.exports = {
    getLogs: getLogs,
    postLogs: postLogs
}