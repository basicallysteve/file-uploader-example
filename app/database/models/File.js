let {sequelize} = require("../index");
let {DataTypes} = require("sequelize");
let File = sequelize.define('File', {
    file_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    getterMethods: {
        name() {
          return this.path.replace(/^.*[\\\/]/, '');
        }
      },
    tableName: 'files'
})

module.exports = File;