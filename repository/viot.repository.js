







const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class ViotRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        /* this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });*/
    }

    async getDevices() {
        
        try {
            const tasks = await this.db.devices.findAll();
            console.log('Devices:::', tasks);
            return tasks;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getTelemetries() {
        
        try {
            const tasks = await this.db.telemetries.findAll();
            console.log('Telemetries:::', tasks);
            return tasks;
        } catch (err) {
            console.log(err);
            return [];
        }
    }


    async createTelemetry(telemetry) {
        let data = {};
        try {
            // telemetry.createdate = new Date().toISOString();
            data = await this.db.tasks.create(telemetry);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

}

module.exports = new ViotRepository();



