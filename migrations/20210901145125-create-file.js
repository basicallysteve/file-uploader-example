'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('files', {
      file_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      path: {
        type: Sequelize.STRING
      },
      record_type: {
        type: Sequelize.STRING,
        defaultValue: 'File'
      },
      record_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('files');
  }
};