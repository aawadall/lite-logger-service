const DataDriver = require('../data/mongoDriver')
const HealthService = require('../services/healthService')
const logsDbName = ''
const mongoHost = process.env.MONGO_HOST || 'localhost'
const mongoUrl = `mongodb://${mongoHost}:27017/${logsDbName}`

const healthService = new HealthService(new DataDriver(mongoUrl))

function getHealth(req, res) {
    
    healthService.getHealth((err, result) => {
        if(!err) {
            res.status(200).json(
                {overall: 'ok', 
                 database : result
            })
        } else {
            res.status(500).json(
                {overall: 'down', 
                 database : result
            })
        }
        
    })
    
    
}



module.exports = {
    getHealth: getHealth
}