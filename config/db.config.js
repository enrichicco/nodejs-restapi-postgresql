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
    db.devices = require("../model/device.model")(sequelize, DataTypes, Model);
    db.telemetries = require("../model/telemetry.model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}
