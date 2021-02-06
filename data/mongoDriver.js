const MongoClient = require('mongodb').MongoClient

let DataDriver = class {

    constructor(dbUrl) {
        console.log(`Starting db client @ ${dbUrl}`)
        this.dbUrl = dbUrl
        MongoClient.connect(dbUrl, (err, db)=>{
            if(err) {
                this.err = err
                console.error(err)
            }
            else {
                console.debug(`Database created @ ${dbUrl}`)
                this.db = db
            }
        })
    }
    getLogs = function (searchTerm, callback) {
        // TODO  
        callback(null, {message: "some result"})  
    }

    writeLogs = function (payload, callback) {
        // TODO
        callback(null, {message: "some result", payload: payload})  
    }

    shutdown = function () {
        this.db.close()
    }
}

module.exports = DataDriver