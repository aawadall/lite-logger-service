const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const dbName = 'logs'
const collectionName = 'logs'

let DataDriver = class {

    constructor(dbUrl) {
        console.log(`Starting db client @ ${dbUrl}`)
        this.dbUrl = dbUrl
        
        mongodb.MongoClient.connect(dbUrl, (err, db)=>{
            if(err) {
                this.err = err
                console.error(err)
                throw err
            }
            else {
                console.debug(`Database created @ ${dbUrl}`)
                db.db(dbName).createCollection(collectionName)

                this.dbUrl = dbUrl
            }
        })
    }
    getLogs = function (searchTerm, callback) {
        // TODO  
        mongodb.MongoClient.connect(this.dbUrl, (er, db) => {
                if(er) {
                    err = er
                    console.error(er);
                    callback(er, null)
                } else {
                    // TODO 
                    const result = db.db(dbName).collection(collectionName).find(searchTerm)
                    callback(null, result)
                    
                }
        })
        
    }

    writeLogs = function (payload, callback) {
        // TODO
        mongodb.MongoClient.connect(this.dbUrl, (er, db) => {
            if(er) {
                err = er 
                console.error(er);
                callback(er,null)
            }
            else {
                
                const result = db.db(dbName).collection(collectionName).insertOne(payload)
                callback(null, result)
            }
        })
    }
}

module.exports = DataDriver