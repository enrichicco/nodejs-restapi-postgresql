const viotRepository  = require('../repository/viot.repository');

class ViotService {

    constructor() {}

    async getDevices() {
        return await viotRepository.getDevices();
    }
    async getTelemetries() {
        return await viotRepository.getTelemetries();
    }

    async createDevice(device) {
        return await viotRepository.createDevice(device);
    }

    async createTelemetry(telemetry) {
        return await viotRepository.createTelemetry(telemetry);
    }

}

module.exports = new ViotService();




