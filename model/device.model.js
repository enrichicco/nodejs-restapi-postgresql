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
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
            allowNull: true
        },
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'device' // We need to choose the model name
    })
    return Device;
}
