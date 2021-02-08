let HealthService = class {
    constructor(dataDriver) {
        this.dataDriver = dataDriver
    }

    getHealth = function (callback) {
        // TODO reach out db and check health then send result in callback
    }
}

module.exports = HealthService