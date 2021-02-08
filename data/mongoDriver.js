const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const dbName = 'logs'
const collectionName = 'logs'

/**
 * Mongo database driver for logging service
 * @param {string} dbUrl database url 
 */
let DataDriver = class {
    constructor(dbUrl, createCollection = false) {
        this.dbUrl = dbUrl
        mongodb.MongoClient.connect(dbUrl, (err, db) =>{
            if(err) {
                this.err = err
                throw err
            }
            else {
                // TODO check collections and create if not present
                db.db(dbName).listCollections().toArray((err, collections) => {
                    
                    if(createCollection)
                        db.db(dbName).createCollection(collectionName)
                })
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
                    callback(er, null)
                } else {
                    db.db(dbName).collection(collectionName).find(searchTerm).toArray((err, result) => {
                        callback(err, result)
                    })    
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
                const result = db.db(dbName).collection(collectionName).insertOne(payload, (err, result) => {
                    callback(err, result.result)
                })
            }
        })
    }

    getStats = function (callback) {
        mongodb.MongoClient.connect(this.dbUrl, (err, db) => {
            if(!err) {
                db.db(dbName).stats((err, result) => {
                    callback(err, result)
                })
            }
        })
    }
}

module.exports = DataDriver