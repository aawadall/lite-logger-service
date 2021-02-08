const DataDriver = require('../data/mongoDriver')
const HealthService = require('../services/healthService')
const logsDbName = ''
const mongoHost = process.env.MONGO_HOST || 'localhost'
const mongoUrl = `mongodb://${mongoHost}:27017/${logsDbName}`

const healthService = new HealthService(new DataDriver(mongoUrl))

function getHealth(req, res) {
    // TODO write methods to probe required services and return health status.
    // TODO for now, return hardcoded value
    res.status(200).json(
        {overall: 'ok', 
        database : {
            status: 'ok',
            hostname: 'name or ip',
            roundtrip: '200 ms'
        }
    })
}



module.exports = {
    getHealth: getHealth
}