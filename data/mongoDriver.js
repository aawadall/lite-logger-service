const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const dbName = 'logs'
const collectionName = 'logs'

/**
 * Mongo database driver for logging service
 * @param {string} dbUrl database url 
 */
let DataDriver = class {
    constructor(dbUrl) {
        this.dbUrl = dbUrl
        mongodb.MongoClient.connect(dbUrl, (err, db)=>{
            if(err) {
                this.err = err
                throw err
            }
            else {
                console.debug(`Database created @ ${dbUrl}`)
                db.db(dbName).createCollection(collectionName)
                this.dbUrl = dbUrl
            }
        })
    }

    /**
     * find logs given an optional search term
     * @param {any} searchTerm json object with search term 
     * @param {*} callback
     */
    getLogs = function (searchTerm, callback) {
        // TODO  fix reading function 
        mongodb.MongoClient.connect(this.dbUrl, (er, db) => {
                if(er) {
                    err = er
                    callback(er, null)
                } else {
                    // TODO find how to populate result
                    const result = db.db(dbName).collection(collectionName).find(searchTerm)
                    // TODO handle errors 
                    callback(null, result)
                    
                }
        })
        
    }

    /**
     * writes log entry 
     * @param {any} payload json object of log entry payload
     * @param {*} callback 
     */
    writeLogs = function (payload, callback) {
        mongodb.MongoClient.connect(this.dbUrl, (er, db) => {
            if(er) {
                err = er 
                callback(er,null)
            }
            else {
                const result = db.db(dbName).collection(collectionName).insertOne(payload)
                // TODO find a better way to define result 
                callback(null, result)
            }
        })
    }
}

module.exports = DataDriver