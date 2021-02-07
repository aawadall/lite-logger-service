const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient


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
                    result = db.db('logs').collection('logs').find(searchTerm)
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
                    result = db.db('logs').collection('logs').insertOne(payload)

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