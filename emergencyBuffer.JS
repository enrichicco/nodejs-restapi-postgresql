const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()


console.log("config loaded");
const taskController = require('./controller/task.controller')

const app = express();
const port = process.env.EXPRESS_API_PORT || 3000;

app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

app.post('/api/task', (req, res) => {
    console.log(req.body);
    taskController.createTask(req.body.task).then(data => res.json(data));
});

app.put('/api/task', (req, res) => {
    taskController.updateTask(req.body.task).then(data => res.json(data));
});

app.delete('/api/task/:id', (req, res) => {
    taskController.deleteTask(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})






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





const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class TaskRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    async getTasks() {
        
        try {
            const tasks = await this.db.tasks.findAll();
            console.log('tasks:::', tasks);
            return tasks;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createTask(task) {
        let data = {};
        try {
            task.createdate = new Date().toISOString();
            data = await this.db.tasks.create(task);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateTask(task) {
        let data = {};
        try {
            task.updateddate = new Date().toISOString();
            data = await this.db.tasks.update({...task}, {
                where: {
                    id: task.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteTask(taskId) {
        let data = {};
        try {
            data = await this.db.tasks.destroy({
                where: {
                    id: taskId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new TaskRepository();






module.exports = (sequelize, DataTypes, Model) => {

    class Telemetry extends Model {}



/* 

  id bigint NOT NULL,
    min_cabinet_temperature integer,
    max_cabinet_temperature integer,
    avg_cabinet_temperature integer,
    door_openings_count integer,
    datetime_tmin timestamp with time zone,
    datetime_tmax timestamp with time zone,
    datetime_tavg timestamp with time zone,
    datetime_door_openings_count timestamp with time zone,
    cell_id character varying,
    wifi_access_points character varying,
    data_upload_interval integer,
    telemetry_data_sampling_interval integer,
    change_portal_address character varying,
    date_in timestamp without time zone DEFAULT now(),
    date_out timestamp without time zone,
    active_flag boolean DEFAULT true NOT NULL,
    device_id bigint



*/


    Telemetry.init({
        // Model attributes are defined here
        id: {
          type: DataTypes.INT,
          allowNull: false
        },
        min_cabinet_temperature: {
            type: DataTypes.INT
            // allowNull defaults to true
        },
        max_cabinet_temperature: {
            type: DataTypes.INT
            // allowNull defaults to true
        },
        avg_cabinet_temperature: {
            type: DataTypes.INT
            // allowNull defaults to true
        },
        door_openings_count: {
            type: DataTypes.INT
            // allowNull defaults to true
        },
        datetime_tmin: {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        datetime_tmax: {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        datetime_tavg: {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        datetime_door_openings_count: {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        cell_id: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        wifi_access_points: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },

        data_upload_interval: {
            type: DataTypes.INT
            // allowNull defaults to true
        },
        telemetry_data_sampling_interval: {
            type: DataTypes.INT
            // allowNull defaults to true
        },
        change_portal_address: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        date_in: {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        date_out: {
            type: DataTypes.DATE,
            allowNull: false
        },
        active_flag: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        device_id: {
            type: DataTypes.INT,
            allowNull: false
        },
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'telemetry' // We need to choose the model name
      });
      
      return Telemetry;
}





module.exports = (sequelize, DataTypes, Model) => {

    class Device extends Model {}


    /*

    id bigint NOT NULL,
        device_name character varying,
        imei_number character varying,
        sim_number character varying,
        mac_address character varying,
        unit_serial_number character varying,
        device_type character varying,
        firmware_version character varying,
        active_flag boolean DEFAULT true NOT NULL,
        date_in timestamp without time zone DEFAULT now() NOT NULL,
        date_out timestamp without time zone





    */


    Device.init({
        // Model attributes are defined here
        id: {
        type: DataTypes.INT,
        allowNull: false
        },
        device_name: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        imei_number: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        sim_number: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        mac_address: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        unit_serial_number: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        device_type: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        firmware_version: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        active_flag: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        date_in: {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        date_out: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'device' // We need to choose the model name
    })
    return Device;
}





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






const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require('../logger/api.logger');

const connect = () => {

    const hostName = process.env.HOST;
    const userName = process.env.DB_USER_ADMIN;
    const password = process.env.DB_USER_ADMIN_PASSWORD;
    const database = process.env.DB;
    const dialect = process.env.DIALECT;
    const consolelogflag = process.env.CONSOLE_LOGGER;
    if(consolelogflag){
        console.log(`user was ${process.env.DB_USER_ADMIN}`);
        console.log(`pwd was ${process.env.DB_USER_ADMIN_PASSWORD}`);
        console.log(`host was ${process.env.HOST}`);
        console.log(`db was ${process.env.DB}`);
    }

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.tasks = require("../model/task.model")(sequelize, DataTypes, Model);
    db.telemetries = require("../model/telemetry.model")(sequelize, DataTypes, Model);
    db.devices = require("../model/device.model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}



