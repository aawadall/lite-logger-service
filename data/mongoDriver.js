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
        callback(null, (err, result) =>
        {
            mongodb.MongoClient.connect(this.dbUrl, (er, db) => {
                if(er) {
                    err = er
                } else {
                    result = db.db(dbName).collection(collectionName).find(searchTerm)
                }
            })
        })  
    }

    writeLogs = function (payload, callback) {
        // TODO
        callback(null, (err, result) => {
            mongodb.MongoClient.connect(this.dbUrl, (er, db) => {
                if(er) err = er 
                else {
                    result = db.db(dbName).collection(collectionName).insertOne(payload)

                }
            })
        }
            )  
    }

    shutdown = function () {
        this.db.close()
    }
}

module.exports = DataDriver