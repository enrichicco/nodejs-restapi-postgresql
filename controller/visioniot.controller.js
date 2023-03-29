const viotService  = require('../service/visioniot.service');
const logger = require('../logger/api.logger');

class VisionIotController {

    async getDevices() {
        logger.info('ViotController: getDevices')
        return await viotService.getDevices();
    }

    async getTelemetries() {
        logger.info('ViotController: getTelemetries')
        return await viotService.getTelemetries();
    }

    async createTelemetry(telemetry) {
        logger.info('ViotController: createTelemetry', telemetry);
        return await viotService.createTelemetry(telemetry);
    }

}
module.exports = new VisionIotController();