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
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        }, 
        min_cabinet_temperature: {
            type: DataTypes.BIGINT
            // allowNull defaults to true
        },
        max_cabinet_temperature: {
            type: DataTypes.BIGINT
            // allowNull defaults to true
        },
        avg_cabinet_temperature: {
            type: DataTypes.BIGINT
            // allowNull defaults to true
        },
        door_openings_count: {
            type: DataTypes.BIGINT
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
            type: DataTypes.BIGINT
            // allowNull defaults to true
        },
        telemetry_data_sampling_interval: {
            type: DataTypes.BIGINT
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
            allowNull: true
        },
        active_flag: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        device_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'telemetry' // We need to choose the model name
      });
      
      return Telemetry;
}





