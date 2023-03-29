
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
            const devices = await this.db.devices.findAll();
            console.log('Devices:::', devices);
            return devices;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    /* 
    
{
    "device": {
        "device_name": "ciccio",
        "imei_number": "12345678901234",
        "sim_number": "54321",
        "mac_address": "00:01:02:03:04:05",
        "unit_serial_number": "A1B2C3D4E5",
        "device_type": "iot gtw",
        "firmware_version": "0.0.0",
        "active_flag": true,
        "date_in": "2023-03-29T13:00:00.000Z",
        "date_out": null,
    }
}    
    
    
    */


    async createDevice(device) {
        let data = {};
        try {
            // telemetry.createdate = new Date().toISOString();
            data = await this.db.devices.create(device);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async getTelemetries() {
        
        try {
            const telemetries = await this.db.telemetries.findAll();
            console.log('Telemetries:::', telemetries);
            return telemetries;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    /*



{
    "telemetry": {
        "min_cabinet_temperature": -5,
        "max_cabinet_temperature": -2,
        "avg_cabinet_temperature": -3,
        "door_openings_count": 12,
        "datetime_tmin" : "2023-03-29T13:00:00.000Z",
        "datetime_tmax": "2023-03-29T13:00:00.000Z",
        "datetime_tavg": "2023-03-29T13:00:00.000Z",
        "datetime_door_openings_count": "2023-03-29T13:00:00.000Z",
        "cell_id": "0,234,30,08d2,796e,63,-64|1,234,30,08d2,7996,55,-64|2,234,30,08d2,796f,1,-81|3,234, 30,08d2,50bd,7,-83|4,234,30,08d2,13c2,55,-96|5,234,30,08d2,13c4,1,-97|6,234,30,08d2,9829,7,-100",
        "wifi_access_points": "-58,18:a6:f7:32:0f:de|-62,02:26:37:07:de:47|-64,80:2a:a8:1a:5d:ec|-65,ac:86:74:22:ba:f3|",
        "data_upload_interval": 60,
        "telemetry_data_sampling_interval": 60,
        "change_portal_address": null,
        "date_in": "2023-03-29T13:00:00.000Z",
        "date_out": null,
        "active_flag": true,
        "device_id": 12
    }
}    


*/


    async createTelemetry(telemetry) {
        let data = {};
        try {
            // telemetry.createdate = new Date().toISOString();
            data = await this.db.telemetries.create(telemetry);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

}

module.exports = new ViotRepository();



