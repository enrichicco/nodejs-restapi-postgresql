const viotRepository  = require('../repository/task.repository');

class ViotService {

    constructor() {}

    async getDevices() {
        return await viotRepository.getTasks();
    }

    async getTelemetries(task) {
        return await taskRepository.createTask(task);
    }

    async createTelemetry(task) {
        return await taskRepository.updateTask(task);
    }





}

module.exports = new ViotService();




