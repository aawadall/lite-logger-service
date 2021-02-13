// const mongodb = require('mongodb')
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
        MongoClient.connect(dbUrl, (err, db) =>{
            if(err) {
                this.err = err
                throw err
            }
            else {
                this.dbUrl = dbUrl
                ensureCollection(db, dbName, collectionName, (er, created) => {
                    if(er) throw er;
                })
            }
        })

        
    }

    /**
     * find logs given an optional search term
     * @param {any} searchTerm json object with search term 
     * @param {*} callback
     */
    getLogs = function (searchTerm, options, callback) {
        // TODO  fix reading function 
        MongoClient.connect(this.dbUrl, (er, db) => {
                if(er) {
                    callback(er, null)
                } else {
                
                    db.db(dbName)
                        .collection(collectionName)
                        .find(searchTerm, options)
                        .toArray((err, result) => {
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
        MongoClient.connect(this.dbUrl, (er, db) => {
            if(er) {
                err = er 
                callback(er,null)
            }
            else {
                
                db.db(dbName)
                    .collection(collectionName)
                    .insertOne(payload, (err, result) => {
                        callback(err, result.result)
                })
            }
        })
    }

    getStats = function (callback) {
        MongoClient.connect(this.dbUrl, (err, db) => {
            if(!err) {
                
                db.db(dbName).stats((err, result) => {
                    callback(err, result)
                })
            }
            else callback(err,null)
        })
    }
}

module.exports = DataDriver


ensureCollection = function (db, dbName, collectionName, callback) {
    
    collection = db.db(dbName).collections( (err, collections) => {
        let collectionCreated = false; 
        if(collections.indexOf(collectionName) === -1)
            db.db(dbName).createCollection(collectionName, (er, result) => {
                if(er) err = er;
                else collectionCreated = true;
            })
        callback(err, collectionCreated)
    })
    
}