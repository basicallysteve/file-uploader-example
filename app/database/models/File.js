let sqlize = require("../index");
let {Model, DataTypes} = require("sequelize");
let File = sqlize.define('File', {
    file_id: {
        type:DataTypes.UUID,
        primaryKey: true,
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    record_type: {
        type: DataTypes.STRING,
        defaultValue: 'File'
    },
    record_id: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'files'
})

module.exports = File;