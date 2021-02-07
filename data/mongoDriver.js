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
        console.debug('get logs');
        callback((err, result) =>
        {
            mongodb.MongoClient.connect(this.dbUrl, (er, db) => {
                if(er) {
                    err = er
                    console.error(er);
                } else {
                    console.log(db.logs.find());
                    console.log(db.logs.find(searchTerm));
                    result = db.logs.find(searchTerm)
                    //db.db(dbName).collection(collectionName).find(searchTerm).read()
                }
            })
        })  
    }

    writeLogs = function (payload, callback) {
        // TODO
        console.debug("writeLogs");
        callback((err, result) => {
            mongodb.MongoClient.connect(this.dbUrl, (er, db) => {
                if(er) {
                    err = er 
                    console.error(er);
                }
                else {
                    result = db.logs.insert(payload)
                    //db.db(dbName).collection(collectionName).insertOne(payload)

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